import { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useMediaQuery from "hooks/useMediaQuery";
import useWindowSize from "hooks/useWindowSize";

import {
  GameItemInfo,
  GameItemBody,
  GameItemInner,
  GameItemOuter,
  GameItemTitle,
  GameItemPlatforms,
  GameItemShowMore,
  GameListMedia,
} from "./Games.styled";
import { DataListWrapper, PlatformIcon, MetaScore } from "../styles/Global.styled";

import { getPlatformImage, getRatingScore } from "utils/game";

const GamesList = ({ games }) => {
  const { i18n } = useTranslation("common");
  const [_, windowWidth] = useWindowSize();
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
    <DataListWrapper width={windowWidth ? `${windowWidth}` : 0}>
      {games?.map((item, index) => {
        return (
          <GameItemOuter key={index}>
            <GameItemInner>
              <GameListMedia>
                <img src={item.background_image || item.image_background} />
              </GameListMedia>

              <GameItemBody>
                <GameItemPlatforms>
                  {item.parent_platforms?.slice(0, 5).map(({ platform }, index) => (
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
                    <MetaScore title={i18n.t("metaScore")}>{item.metacritic}</MetaScore>
                  )}
                </GameItemPlatforms>

                <GameItemTitle>
                  <Link href={`/games/${item.slug}`}>
                    <a title={item.name}>{item.name}</a>
                  </Link>
                </GameItemTitle>

                <GameItemInfo open={index == infoOpen}>
                  <div>
                    <span>{i18n.t("released")}:</span>
                    <span>{item.released}</span>
                  </div>
                  <div>
                    <span>{i18n.t("genres")}:</span>
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
                    <span>{i18n.t("gameRating")}:</span>
                    <span>{getRatingScore(item)}</span>
                  </div>
                </GameItemInfo>

                {isSmallScreen && (
                  <GameItemShowMore onClick={() => handleInfoOpen(index)}>
                    {index == infoOpen ? (
                      <span>{i18n.t("hide")}</span>
                    ) : (
                      <span>{i18n.t("show")}</span>
                    )}
                  </GameItemShowMore>
                )}
              </GameItemBody>
            </GameItemInner>
          </GameItemOuter>
        );
      })}
    </DataListWrapper>
  );
};

export default GamesList;
