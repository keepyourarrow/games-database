import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";

import {
  AppWrapper,
  AppLoader,
  GlobalStyle,
  MainWrapper,
} from "../components/styles/Global.styled";
import HeaderLoader from "../components/reusable/HeaderLoader";
import GamesListLoader from "../components/reusable/GamesListLoader";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Layout/Sidebar";
import SingleGameLoader from "../components/reusable/SingleGameLoader";
import useMediaQuery from "hooks/useMediaQuery";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  const [route, setRoute] = useState("");
  const isSmallScreen = useMediaQuery(980);

  useEffect(() => {
    const handleStart = (url) => {
      setPageLoading(true);
      setRoute(url);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const isGameRoute = router?.route == "/games/[name]";

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Layout />

        <MainWrapper>
          {!isSmallScreen && !isGameRoute && <Sidebar />}
          {pageLoading ? (
            <AppLoader>
              {route.includes("/games/") ? (
                <SingleGameLoader />
              ) : (
                <>
                  <HeaderLoader />
                  <GamesListLoader />
                </>
              )}
            </AppLoader>
          ) : (
            <Component {...pageProps} />
          )}
        </MainWrapper>
      </AppWrapper>
    </>
  );
};

export default appWithTranslation(MyApp);
