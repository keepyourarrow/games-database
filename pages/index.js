import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import GamesContent from "components/Games/GamesContent";

import { getPlatforms, discoverGames } from "api/get";

const ORDER = "rating";

const HomePage = ({ data, platforms }) => {
  const { i18n } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{i18n.t("homePage.pageTitle")}</title>
        <meta name="description" content={i18n.t("rawgClone")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GamesContent
        action={discoverGames}
        data={data}
        defaultOrder={ORDER}
        title={i18n.t("homePage.title")}
        platforms={platforms}
        type="main"
      />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  const data = await discoverGames({ type: "main" });
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

export default HomePage;
