import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import GamesContent from "components/Games/GamesContent";

import { getGamesByDate, getPlatforms } from "api/get";

const ORDER = "released";

const CalendarPage = ({ data, year, month, platforms }) => {
  const { i18n } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>
          {`${i18n.t("videoGameReleaseDates")} (${i18n.t("calendar")}) - ${i18n.t(
            `dates.fullMonth.${month - 1}`
          )} ${year}
                    `}
        </title>
        <meta name="description" content={i18n.t("rawgClone")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GamesContent
        action={getGamesByDate}
        data={data}
        selectedDate={`${year}/${month}`}
        defaultOrder={ORDER}
        title={i18n.t("calendar")}
        platforms={platforms}
      />
    </div>
  );
};

export const getServerSideProps = async ({ locale, params }) => {
  const [year, month] = params.date.split("-");
  const date = `${year}/${month}`;
  const data = await getGamesByDate({ date });

  const platforms = await getPlatforms();

  return {
    props: {
      data: data?.results || [],
      platforms: platforms?.results || [],
      year,
      month,
      ...(await serverSideTranslations(locale, "i18n")),
    },
    revalidate: 120,
  };
};

export default CalendarPage;
