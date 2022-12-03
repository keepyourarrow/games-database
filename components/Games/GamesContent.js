import { CenteredTitle, ContentWrapper } from "components/styles/Global.styled";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import useUpdateEffect from "hooks/useUpdateEffect";

import InfiniteScroll from "react-infinite-scroll-component";

import GamesList from "./GamesList";
import Filters from "./Filters";
import Header from "../reusable/Header";
import GamesListLoader from "../reusable/GamesListLoader";
import BackgroundArt from "../reusable/BackgroundArt";

import { getMonth, getYear } from "utils/dates";
import { formatLargeNumbers } from "utils/strings";

const GamesContent = ({
  action,
  data,
  selectedDate,
  defaultOrder,
  info = null,
  tags,
  type = null,
  title,
  platforms,
  isPopular,
}) => {
  const router = useRouter();
  const { i18n } = useTranslation("common");

  const [games, setGames] = useState(data);
  const [hasMore, setHasMore] = useState(data.length > 0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(data.length);
  const [isLoading, setIsLoading] = useState(false);

  //#region filters
  const [selectedOrder, setSelectedOrder] = useState({
    value: defaultOrder,
    label: i18n.t(defaultOrder),
  });
  const [orderDesc, setOrderDesc] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState({ value: "All", label: i18n.t("all") });
  //#endregion

  const applyFilters = () => {
    let orderBy = selectedOrder.value;

    //descending
    if (orderDesc) {
      orderBy = `-${orderBy}`;
    }

    let filters = `ordering=${orderBy}`;

    if (selectedPlatform.value != "All") {
      filters += `&parent_platforms=${selectedPlatform.value}`;
    }

    if (isPopular) {
      filters += "&popular=true";
    }

    return filters;
  };

  useUpdateEffect(() => {
    setIsLoading(true);
    setHasMore(true);
    setCount(null);

    let filters = applyFilters();

    const controller = new AbortController();

    action({
      type,
      filter: filters,
      pageSize: 20,
      page: 1,
      date: selectedDate,
      onSuccess: (newGames) => {
        if (newGames?.results?.length > 0) {
          setGames(newGames.results);
          setPage(1);
          setCount(newGames.results.length);
        } else {
          setCount(0);
          setHasMore(false);
          setGames([]);
        }
      },
      onError: (err) => {
        setCount(0);
        setHasMore(false);
        setGames([]);
      },
      onFinally: () => setIsLoading(false),
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [selectedOrder.value, selectedPlatform.value, orderDesc]);

  const getMoreGames = () => {
    const pageSize = 20;

    const nextPage = page + 1;

    let filters = applyFilters();

    action({
      type,
      filter: filters,
      page_size: pageSize,
      page: nextPage,
      date: selectedDate,
      onSuccess: (newGames) => {
        if (newGames?.results?.length > 0) {
          setGames((game) => [...game, ...newGames.results]);
          setPage(nextPage);
          setCount((prevCount) => prevCount + newGames.results.length);
        } else if (newGames.next == null) {
          setHasMore(false);
        }
      },
      onError: (err) => {
        setHasMore(false);
      },
    });
  };

  const handleChangeOrder = (value) => {
    // descending
    if (selectedOrder.value == value.value && orderDesc) {
      // ascending
      setOrderDesc(false);
    } else {
      setOrderDesc(true);
    }
    setSelectedOrder(value);
  };

  const handleChangePlatform = (value) => {
    setSelectedPlatform(value);
  };

  const handleChangeDate = (newDate) => {
    const year = getYear(newDate);
    const month = getMonth(newDate);
    router.push(`/video-game-releases/${year}-${month}`);
  };

  let description = null;

  if (count != null) {
    let amount = info?.games_count > 0 ? `${count}/${formatLargeNumbers(info.games_count)}` : count;
    description = i18n.t("gameCount", { count: amount });
  }

  return (
    <ContentWrapper>
      <Header
        date={selectedDate}
        info={info}
        tags={tags}
        title={title}
        description={description}
        handleChangeDate={handleChangeDate}
      />

      <Filters
        orderDesc={orderDesc}
        selectedOrder={selectedOrder}
        platforms={platforms}
        selectedPlatform={selectedPlatform}
        handleChangeOrder={handleChangeOrder}
        handleChangePlatform={handleChangePlatform}
      />
      {isLoading ? (
        <GamesListLoader />
      ) : (
        <InfiniteScroll
          dataLength={games.length}
          hasMore={hasMore}
          next={getMoreGames}
          loader={<CenteredTitle>{i18n.t("loading")}</CenteredTitle>}
          endMessage={
            <CenteredTitle>
              {games?.length > 0 ? i18n.t("noMoreGames") : i18n.t("noGamesFound")}
            </CenteredTitle>
          }
        >
          <GamesList games={games} />
        </InfiniteScroll>
      )}

      {info?.image_background && <BackgroundArt image={info.image_background} />}
    </ContentWrapper>
  );
};

export default GamesContent;
