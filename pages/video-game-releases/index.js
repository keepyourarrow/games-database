import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import GamesContent from "components/Games/GamesContent";

import { getYear, getMonth } from "utils/dates";

import { getGamesByDate, getPlatforms } from "api/get";

const ORDER = "released";

const CalendarPage = ({ data, date, platforms }) => {
  const { i18n } = useTranslation("common");

  return (
    <div>
      <Head>
        <title> {`${i18n.t("videoGameReleaseDates")} (${i18n.t("calendar")})`}</title>
        <meta name="description" content={i18n.t("rawgClone")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GamesContent
        action={getGamesByDate}
        data={data}
        selectedDate={date}
        defaultOrder={ORDER}
        title={i18n.t("calendar")}
        platforms={platforms}
      />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  const date = `${getYear()}/${getMonth()}`;
  const data = await getGamesByDate({ date });

  const platforms = await getPlatforms();

  return {
    props: {
      data: data?.results || [],
      platforms: platforms?.results || [],
      date,
      ...(await serverSideTranslations(locale, "i18n")),
    },
    revalidate: 120,
  };
};

export default CalendarPage;
