import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import InfoContent from "components/Info/InfoContent";

import { INFO_TYPES } from "constants/Types";

import { getInfo } from "api/get";

const InfoType = ({ data, type }) => {
  const { i18n } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{`${i18n.t(type)} - ${i18n.t("rawgClone")}`}</title>
        <meta name="description" content={i18n.t("rawgClone")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InfoContent data={data} title={i18n.t(type)} type={type} />
    </div>
  );
};

export const getStaticProps = async ({ locale, params }) => {
  const data = await getInfo({ type: params.infoType, filter: "page=1&page_size=40" });

  const found = INFO_TYPES.find((type) => params?.infoType == type);

  if (!found) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data?.results || [],
      type: params.infoType,
      ...(await serverSideTranslations(locale, "i18n")),
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  const paths = INFO_TYPES.map((type) => ({ params: { infoType: type } }));

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};

export default InfoType;
