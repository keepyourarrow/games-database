import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { HomeWrapper } from "./Home.styled";
import { CenteredTitle } from "../styles/Global.styled";

import { get } from "../../api/api";
import useUpdateEffect from "../../hooks/useUpdateEffect";

import GamesList from "./GamesList";
import Filters from "./Filters";
import Header from "./Header";
import GamesListLoader from "../reusable/GamesListLoader";

const Home = ({ data, platforms }) => {
    const [games, setGames] = useState(data);
    const [hasMore, setHasMore] = useState(data.length > 0);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(data.length);
    const [isLoading, setIsLoading] = useState(false);

    //#region filters
    const [selectedOrder, setSelectedOrder] = useState({ value: "rating", label: "По рейтингу" });
    const [orderDesc, setOrderDesc] = useState(true);
    const [selectedPlatform, setSelectedPlatform] = useState({ value: "All", label: "Все" });
    //#endregion

    useUpdateEffect(() => {
        setIsLoading(true);
        setHasMore(true);
        setCount(20);

        let orderBy = selectedOrder.value;

        //descending
        if (orderDesc) {
            orderBy = `-${orderBy}`;
        }

        let filters = `page_size=20&page=1&ordering=${orderBy}`;

        if (selectedPlatform.value != "All") {
            filters += `&parent_platforms=${selectedPlatform.value}`;
        }

        get(
            `/games/lists/main?${filters}&`,
            (newGames) => {
                if (newGames?.results?.length > 0) {
                    setGames(newGames.results);
                    setPage(1);
                    setCount(20);
                } else {
                    setCount(0);
                    setHasMore(false);
                }
            },
            () => setIsLoading(false),
            (err) => {
                setCount(0);
                setHasMore(false);
            }
        );
    }, [selectedOrder.value, selectedPlatform.value, orderDesc]);

    const getMoreGames = () => {
        const pageSize = 20;

        const nextPage = page + 1;
        let orderBy = selectedOrder.value;

        //descending
        if (orderDesc) {
            orderBy = `-${orderBy}`;
        }

        let filters = `page_size=${pageSize}&page=${nextPage}&ordering=${orderBy}`;

        if (selectedPlatform.value != "All") {
            filters += `&parent_platforms=${selectedPlatform.value}`;
        }

        get(
            `/games/lists/main?${filters}&`,
            (newGames) => {
                if (newGames?.results?.length > 0) {
                    setGames((game) => [...game, ...newGames.results]);
                    setPage(nextPage);
                    setCount((prevCount) => prevCount + pageSize);
                }
            },
            () => {},
            (err) => {
                setHasMore(false);
            }
        );
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

    return (
        <HomeWrapper>
            <Header
                count={count}
                orderDesc={orderDesc}
                selectedOrder={selectedOrder}
                platform={selectedPlatform}
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
                    loader={<CenteredTitle>Загрузка...</CenteredTitle>}
                    endMessage={<CenteredTitle>Больше нет данных</CenteredTitle>}
                >
                    <GamesList games={games} />
                </InfiniteScroll>
            )}
        </HomeWrapper>
    );
};

export default Home;
