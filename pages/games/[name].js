import Head from "next/head";

import { get } from "../../api/api";

import DisplaySingleGame from "../../components/Games/DisplaySingleGame";

export default function singleGame({ dlc, game, screenshots, similar }) {
    return (
        <>
            <Head>
                <title>{game?.name} - release date, ratings, screenshots on RAWR clone</title>
                <meta name="description" content={game?.name} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DisplaySingleGame dlc={dlc} game={game} screenshots={screenshots} similar={similar} />
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    const results = await Promise.all([
        get(`/games/${params.name}?`),
        get(`/games/${params.name}/screenshots?`),
        get(`/games/${params.name}/game-series?`),
        get(`/games/${params.name}/additions?`),
    ]);
    const [game, screenshots, similar, dlc] = results;

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
        },
        revalidate: 120,
    };
};

export async function getStaticPaths() {
    const data = await get(`/games/lists/main?ordering=-rating&`);

    const paths = data?.results.map((item) => ({ params: { name: item.name.toLowerCase() } }));

    return {
        paths: paths || [],
        fallback: "blocking",
    };
}
