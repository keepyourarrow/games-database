import { useTranslation } from "next-i18next";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";

import { DataListWrapper } from "../styles/Global.styled";
import {
  InfoItem,
  ItemAvatar,
  ItemHeader,
  ItemTitle,
  ItemSecondaryTitle,
  ItemBodyItem,
  ItemBody,
  ItemBodyHeader,
} from "./Info.styled";

import { sortByAdded } from "utils/sort";

const InfoList = ({ data, type }) => {
  const { i18n } = useTranslation("common");
  const [_, windowWidth] = useWindowSize();

  return (
    <DataListWrapper width={windowWidth ? `${windowWidth}` : 0}>
      {data?.map((item, index) => {
        return (
          <InfoItem key={index} image={item.image_background}>
            <ItemHeader>
              {type == "creators" && <ItemAvatar image={item.image} />}

              <Link href={`/${type}/${item.slug}`}>
                <a>
                  <ItemTitle>{item.name}</ItemTitle>
                </a>
              </Link>
              {type == "platforms" && item.year_start && (
                <ItemSecondaryTitle>{item.year_start}</ItemSecondaryTitle>
              )}
              {type == "creators" && item.positions?.length > 0 && (
                <ItemSecondaryTitle>
                  {item.positions.map((position) => position.name).join(", ")}
                </ItemSecondaryTitle>
              )}
            </ItemHeader>
            <ItemBody>
              {item.games_count && (
                <ItemBodyHeader>
                  <span>{i18n.t("totalGames")}</span>
                  <span>{item.games_count.toLocaleString()}</span>
                </ItemBodyHeader>
              )}
              {sortByAdded(item.games)
                .slice(0, 3)
                .map((game, index) => (
                  <ItemBodyItem key={index}>
                    <Link href={`/games/${game.slug}`}>
                      <a>
                        <span>{game.name}</span>
                      </a>
                    </Link>
                    <span>{game.added.toLocaleString()}</span>
                  </ItemBodyItem>
                ))}
            </ItemBody>
          </InfoItem>
        );
      })}
    </DataListWrapper>
  );
};

export default InfoList;
