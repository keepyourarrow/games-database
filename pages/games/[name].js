import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import DisplaySingleGame from "components/SingleGame/DisplaySingleGame";

import { getGameDetails, getGamesList } from "api/get";

const SingleGame = ({ dlc, game, screenshots, similar }) => {
  const { i18n } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          {game?.name} - {i18n.t("releaseDate")}, {i18n.t("ratings")} {i18n.t("")} {i18n.t("")}{" "}
          ratings, screenshots on RAWR clone
        </title>
        <meta name="description" content={game?.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DisplaySingleGame dlc={dlc} game={game} screenshots={screenshots} similar={similar} />
    </>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const [game, screenshots, similar, dlc] = await Promise.all([
    getGameDetails({ type: params.name }),
    getGameDetails({ type: `${params.name}/screenshots` }),
    getGameDetails({ type: `${params.name}/game-series` }),
    getGameDetails({ type: `${params.name}/additions` }),
  ]);

  if (!game || game.message) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      game: game || [],
      screenshots: screenshots?.results || [],
      similar: similar?.results || [],
      dlc: dlc?.results || [],
      ...(await serverSideTranslations(locale, "i18n")),
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  const data = await getGamesList();

  const paths = data?.results.map((item) => ({ params: { name: item.name.toLowerCase() } }));

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};

export default SingleGame;
