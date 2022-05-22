import Head from "next/head";

import { get } from "../api/api";

import Home from "../components/Home/Home";

export default function HomePage({ data, platforms }) {
    return (
        <div>
            <Head>
                <title>Video Game database</title>
                <meta name="description" content="rawr clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Home data={data} platforms={platforms} />
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await get(`/games/lists/main?page_size=20&page=1&ordering=-rating&`);

    const platforms = await get(`/platforms/lists/parents?`);

    return {
        props: {
            data: data?.results || [],
            platforms: platforms?.results || [],
        },
        revalidate: 120,
    };
};
