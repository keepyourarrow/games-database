import { useState } from "react";
import Link from "next/link";

import useMediaQuery from "../../hooks/useMediaQuery";

import {
    GameItemInfo,
    GameItemBody,
    GameItemInner,
    GameItemOuter,
    GameItemTitle,
    GameItemPlatforms,
    GameItemShowMore,
    GameListMedia,
    GameListWrapper,
} from "./Home.styled";
import { PlatformIcon, MetaScore } from "../styles/Global.styled";

import { getPlatformImage, getRatingScore } from "../../utils/game";

const GamesList = ({ games }) => {
    // only for screens that are less than 980px
    const [infoOpen, setInfoOpen] = useState(null);

    const isSmallScreen = useMediaQuery(980);

    const handleInfoOpen = (index) => {
        if (infoOpen == index) {
            index = null;
        }
        setInfoOpen(index);
    };

    return (
        <GameListWrapper>
            {games?.map((item, index) => {
                return (
                    <GameItemOuter key={index}>
                        <GameItemInner>
                            <GameListMedia>
                                <img src={item.background_image} />
                            </GameListMedia>

                            <GameItemBody>
                                <GameItemPlatforms>
                                    {item.parent_platforms
                                        ?.slice(0, 5)
                                        .map(({ platform }, index) => (
                                            <PlatformIcon
                                                key={index}
                                                style={{
                                                    backgroundImage: `url(data:image/svg+xml;base64,${getPlatformImage(
                                                        platform.name
                                                    )}
											)`,
                                                }}
                                            />
                                        ))}
                                    {item.parent_platforms?.length > 5 && (
                                        <div>+{item.parent_platforms.slice(5).length}</div>
                                    )}
                                    {item.metacritic && (
                                        <MetaScore title="MetaScore">{item.metacritic}</MetaScore>
                                    )}
                                </GameItemPlatforms>

                                <GameItemTitle>
                                    <Link href={`/games/${item.slug}`}>
                                        <a>{item.name}</a>
                                    </Link>
                                </GameItemTitle>

                                <GameItemInfo open={index == infoOpen}>
                                    <div>
                                        <span>Release Date:</span>
                                        <span>{item.released}</span>
                                    </div>
                                    <div>
                                        <span>Genres:</span>
                                        <span>
                                            {item.genres?.map((genre, index) => {
                                                let name = genre.name;
                                                if (index + 1 !== item.genres.length) {
                                                    name += ", ";
                                                }
                                                return name;
                                            })}
                                        </span>
                                    </div>
                                    <div>
                                        <span>Rating:</span>
                                        <span>{getRatingScore(item)}</span>
                                    </div>
                                </GameItemInfo>

                                {isSmallScreen && (
                                    <GameItemShowMore onClick={() => handleInfoOpen(index)}>
                                        {index == infoOpen ? (
                                            <span>Скрыть</span>
                                        ) : (
                                            <span>Показать</span>
                                        )}
                                    </GameItemShowMore>
                                )}
                            </GameItemBody>
                        </GameItemInner>
                    </GameItemOuter>
                );
            })}
        </GameListWrapper>
    );
};

export default GamesList;
