import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useMediaQuery from "hooks/useMediaQuery";

import {
  GameAbout,
  GameAvailability,
  GameGallery,
  GameInfo,
  GameMeta,
  GameMetaDate,
  GameMetaPlatforms,
  GameRatingChart,
  GameRatingDistributionStat,
  GameRatingIcon,
  GameRatingStats,
  GameRatingStatsInfo,
  GameTitle,
  GameWrapper,
  Wrapper,
} from "./Games.styled";
import { MainLink, MetaScore, PlatformIcon } from "../styles/Global.styled";

import { getPlatformImage, getRatingName, getRatingScore, getRatingsSorted } from "utils/game";
import { formatDate } from "utils/dates";

import Modal from "../reusable/Modal";
import BackgroundArt from "../reusable/BackgroundArt";

const DisplaySingleGame = ({ dlc, game, screenshots, similar }) => {
  const { i18n } = useTranslation("common");

  const [readMore, setReadMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const isSmallScreen = useMediaQuery(980);

  const handleReadMore = () => {
    setReadMore((prevReadMore) => !prevReadMore);
  };

  const handleSelectImage = (index) => {
    if (index == null) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setSelectedImage(index);
  };

  return (
    <>
      <Wrapper>
        <GameWrapper>
          <div>
            <GameMeta>
              <GameMetaDate>{game.released ? formatDate(game.released, i18n) : "TBD"}</GameMetaDate>
              <GameMetaPlatforms>
                {game.parent_platforms?.slice(0, 5).map(({ platform }, index) => (
                  <PlatformIcon
                    key={index}
                    extraLarge={true}
                    style={{
                      backgroundImage: `url(data:image/svg+xml;base64,${getPlatformImage(
                        platform.name
                      )})`,
                    }}
                  />
                ))}
                {game.parent_platforms?.length > 5 && (
                  <div>+{game.parent_platforms.slice(5).length}</div>
                )}
              </GameMetaPlatforms>

              {game.playtime > 0 && (
                <div>{i18n.t("gamePage.playtime", { playtime: game.playtime })}</div>
              )}
            </GameMeta>

            <GameTitle>{game.name}</GameTitle>

            {/* for small screens */}
            {screenshots.length > 0 && isSmallScreen && (
              <Gallery
                isSmallScreen={isSmallScreen}
                screenshots={screenshots}
                handleSelectImage={handleSelectImage}
              />
            )}

            <GameRatingChart>
              <h3>{i18n.t("gameRating")}</h3>
              <div>
                <span>{getRatingName(game.ratings)}</span>

                <span>{getRatingScore(game)}</span>
              </div>
            </GameRatingChart>

            {game.ratings?.length > 0 && (
              <GameRatingStats>
                <GameRatingDistributionStat>
                  {getRatingsSorted(game.ratings).map((rating, index) => (
                    <GameRatingIcon
                      key={index}
                      style={{ width: rating.percent + "%" }}
                      color={rating.title}
                    />
                  ))}
                </GameRatingDistributionStat>

                <GameRatingStatsInfo>
                  {getRatingsSorted(game.ratings).map((rating, index) => (
                    <div key={index}>
                      <GameRatingIcon color={rating.title} />
                      <p>{rating.title}</p>
                      <p>{rating.count}</p>
                    </div>
                  ))}
                </GameRatingStatsInfo>
              </GameRatingStats>
            )}
            <GameAbout>
              {game.description_raw?.length}
              <h4>{i18n.t("gamePage.about")}</h4>
              {!readMore ? (
                <p>{game.description_raw}</p>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
              )}
              {game.description_raw?.length > 280 && game.description?.length > 0 && (
                <div onClick={handleReadMore}>
                  {readMore ? i18n.t("showLess") : i18n.t("showMore")}
                </div>
              )}
            </GameAbout>

            <GameInfo>
              <div>
                {game.platforms?.length > 0 && (
                  <div>
                    <span>{i18n.t("platforms")}</span>
                    <div>
                      {game.platforms.map(
                        ({ platform }, index) =>
                          `${platform.name}${index + 1 < game.platforms.length ? ", " : ""}`
                      )}
                    </div>
                  </div>
                )}

                {game.metacritic && (
                  <div>
                    <span>{i18n.t("metaScore")}</span>
                    <MetaScore title={i18n.t("metaScore")}>{game.metacritic}</MetaScore>
                  </div>
                )}
                {game.genres?.length > 0 && (
                  <div>
                    <span>{i18n.t("genres")}</span>
                    <div>
                      {game.genres.map(
                        (genre, index) =>
                          `${genre.name}${index + 1 < game.genres.length ? ", " : ""}`
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <span>{i18n.t("releaseDate")}</span>
                  <div>{game.released ? formatDate(game.released, i18n) : "TBD"}</div>
                </div>
                {game.developers?.length > 0 && (
                  <div>
                    <span>{i18n.t("developer")}</span>
                    <div>
                      {game.developers.map(
                        (developer, index) =>
                          `${developer.name}${index + 1 < game.developers.length ? ", " : ""}`
                      )}
                    </div>
                  </div>
                )}

                {game.publishers?.length > 0 && (
                  <div>
                    <span>{i18n.t("publisher")}</span>
                    <div>
                      {game.publishers.map(
                        (publisher, index) =>
                          `${publisher.name}${index + 1 < game.publishers.length ? ", " : ""}`
                      )}
                    </div>
                  </div>
                )}
                <div>
                  <span>{i18n.t("ageRating")}</span>
                  <div>{game.esrb_rating ? game.esrb_rating.name : i18n.t("notSpecified")}</div>
                </div>
              </div>

              {similar.length > 0 && (
                <div>
                  <span>{i18n.t("otherGames")}</span>
                  <div>
                    {similar.map((game, index) => (
                      <React.Fragment key={index}>
                        <Link href={`/games/${game.slug}`}>
                          <MainLink>{game.name}</MainLink>
                        </Link>
                        {index + 1 < similar.length ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {dlc.length > 0 && (
                <div>
                  <span>DLC</span>
                  <div>
                    {dlc.map((game, index) => (
                      <React.Fragment key={index}>
                        <Link href={`/games/${game.slug}`}>
                          <MainLink>{game.name}</MainLink>
                        </Link>
                        {index + 1 < dlc.length ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {game.tags?.length > 0 && (
                <div>
                  <span>{i18n.t("tags")}</span>
                  <div>
                    {game.tags.map(
                      (tag, index) => `${tag.name}${index + 1 < game.tags.length ? ", " : ""}`
                    )}
                  </div>
                </div>
              )}
              {game.website && (
                <div>
                  <span>{i18n.t("website")}</span>
                  <MainLink href={game.website} target="_blank">
                    {game.website}
                  </MainLink>
                </div>
              )}
            </GameInfo>
          </div>

          <div>
            {/* for large screens */}
            {screenshots.length > 0 && !isSmallScreen && (
              <Gallery screenshots={screenshots} handleSelectImage={handleSelectImage} />
            )}

            {game.stores?.length > 0 && (
              <GameAvailability>
                <div>{i18n.t("whereToBuy")}</div>

                <div>
                  {game.stores.map((game, index) => (
                    <a
                      href={`https://${game.store.domain}`}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      <span>{game.store.name}</span>
                    </a>
                  ))}
                </div>
              </GameAvailability>
            )}
          </div>
        </GameWrapper>
      </Wrapper>

      {selectedImage != null && (
        <Modal selected={selectedImage} closeModal={handleSelectImage} items={screenshots} />
      )}
      <BackgroundArt image={game.background_image} />
    </>
  );
};

export const Gallery = ({ isSmallScreen = false, screenshots, handleSelectImage }) => {
  return (
    <GameGallery>
      {screenshots.slice(0, 3).map((screenshot, index) => {
        return (
          <div role="button" onClick={() => handleSelectImage(index)} key={index}>
            <img src={screenshot.image} />
          </div>
        );
      })}
      {!isSmallScreen && (
        <div onClick={() => handleSelectImage(0)}>
          <span>...</span>
          <span>Показать все</span>
        </div>
      )}
    </GameGallery>
  );
};

export default DisplaySingleGame;
