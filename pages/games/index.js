import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import GamesContent from "components/Games/GamesContent";

import { getGames, getPlatforms } from "api/get";

const ORDER = "rating";

const GamePage = ({ data, platforms }) => {
  const { i18n } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{i18n.t("homePage.pageTitle")}</title>
        <meta name="description" content={i18n.t("rawgClone")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GamesContent
        action={getGames}
        data={data}
        defaultOrder={ORDER}
        title={i18n.t("allGames")}
        platforms={platforms}
      />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  const data = await getGames({ type: null });

  const platforms = await getPlatforms();

  return {
    props: {
      data: data?.results || [],
      platforms: platforms?.results || [],
      ...(await serverSideTranslations(locale, "i18n")),
    },
    revalidate: 120,
  };
};

export default GamePage;
