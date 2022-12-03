import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import GamesContent from "components/Games/GamesContent";

import { typeHasTags } from "utils/game";
import { capitalize } from "utils/strings";
import { INFO_TYPES } from "constants/Types";

import { getGames, getInfo, getPlatforms, getTags } from "api/get";

const ORDER = "added";

const Name = ({ games, info, platforms, tags, infoType, type }) => {
  const { i18n } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{`${i18n.t(infoType)} - ${i18n.t("rawgClone")}`}</title>
        <meta name="description" content={i18n.t("rawgClone")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GamesContent
        action={getGames}
        data={games}
        defaultOrder={ORDER}
        info={info}
        platforms={platforms}
        tags={tags}
        title={i18n.t(infoType)}
        type={type}
      />
    </div>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const found = INFO_TYPES.find((type) => params?.infoType == type);

  if (!found) {
    return {
      notFound: true,
    };
  }

  const [info, platforms] = await Promise.all([
    getInfo({ type: `${params.infoType}/${params.name}` }),
    getPlatforms(),
  ]);

  const name = info?.id || params.name;

  const type = `${params.infoType}=${name}`;
  let games = await getGames({ type });

  let tags = null;
  if (typeHasTags(params.infoType)) {
    tags = await getTags();
  }

  return {
    props: {
      info: info || null,
      games: games?.results || [],
      platforms: platforms?.results || [],
      tags: tags?.results || null,
      type,
      infoType: capitalize(params.name),
      ...(await serverSideTranslations(locale, "i18n")),
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Name;
