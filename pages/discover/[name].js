import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import GamesContent from "components/Games/GamesContent";

import { DISCOVER_TYPES } from "constants/Types";

import { discoverGames, getPlatforms } from "api/get";

const ORDER = "added";

const Discover = ({ data, platforms, label, type }) => {
  const { i18n } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{`${i18n.t(label)} - ${i18n.t("rawgClone")}`}</title>
        <meta name="description" content={i18n.t("rawgClone")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GamesContent
        action={discoverGames}
        data={data}
        defaultOrder={ORDER}
        platforms={platforms}
        title={i18n.t(label)}
        type={type}
      />
    </div>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const type = DISCOVER_TYPES.find((type) => type.name == params.name);
  const data = await discoverGames({ type: type.param });

  const platforms = await getPlatforms();

  return {
    props: {
      data: data?.results || [],
      platforms: platforms?.results || [],
      type: type.param,
      label: type.label,
      ...(await serverSideTranslations(locale, "i18n")),
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  const paths = DISCOVER_TYPES.map((name) => ({ params: name }));

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};

export default Discover;
