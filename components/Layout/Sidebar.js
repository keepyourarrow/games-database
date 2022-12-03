import { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import {
  SidebarIcon,
  SidebarItem,
  SidebarList,
  SidebarListItem,
  SidebarListTitle,
  SidebarShowAllBtn,
  SidebarTitle,
  SidebarWrapper,
} from "./Layout.styled";

import { getIcon } from "utils/icon";
import { Chevron } from "../styles/Global.styled";

const getItems = (i18n) => {
  if (!i18n.t) {
    return [];
  }
  return [
    { label: i18n.t("home"), link: "/" },
    // { label: i18n.t("reviews"), link: "/reviews/popular" },
    {
      label: i18n.t("newReleases"),
      list: [
        { type: "last30Days", label: i18n.t("last30Days"), link: "/discover/last-30-days" },
        { type: "thisWeek", label: i18n.t("thisWeek"), link: "/discover/this-week" },
        { type: "nextWeek", label: i18n.t("nextWeek"), link: "/discover/next-week" },
        {
          type: "releaseCalendar",
          label: i18n.t("releaseCalendar"),
          link: "/video-game-releases",
        },
      ],
    },
    {
      label: i18n.t("top"),
      list: [
        {
          type: "bestOfTheYear",
          label: i18n.t("bestOfTheYear"),
          link: "/discover/best-of-the-year",
        },
        {
          type: "popularIn2021",
          label: i18n.t("popularIn2021"),
          link: "/discover/popular-in-2021",
        },
        {
          type: "allTimeTop250",
          label: i18n.t("allTimeTop250"),
          link: "/discover/all-time-top",
        },
      ],
    },
    { label: i18n.t("allGames"), link: "/games" },
    {
      label: i18n.t("browse"),
      showAll: false,
      link: "/games/browse",
      list: [
        { type: "platforms", label: i18n.t("platforms"), link: "/platforms" },
        { type: "stores", label: i18n.t("stores"), link: "/stores" },
        { type: "collections", label: i18n.t("collections"), link: "/collections/popular" },
        // { type: "reviews", label: i18n.t("reviews"), link: "/reviews/popular" },
        { type: "genres", label: i18n.t("genres"), link: "/genres" },
        { type: "creators", label: i18n.t("creators"), link: "/creators" },
        { type: "tags", label: i18n.t("tags"), link: "/tags" },
        { type: "developers", label: i18n.t("developers"), link: "/developers" },
        { type: "publishers", label: i18n.t("publishers"), link: "/publishers" },
      ],
    },
    {
      label: i18n.t("platforms"),
      showAll: false,
      link: "/platforms",
      list: [
        { type: "pc", label: "PC", link: "/platforms/pc" },
        { type: "playstation", label: "Playstation 4", link: "/platforms/playstation4" },
        { type: "xbox", label: "Xbox One", link: "/platforms/xbox-one" },
        { type: "nintendo", label: "Nintendo Switch", link: "/platforms/nintendo-switch" },
        { type: "ios", label: "iOS", link: "/platforms/ios" },
        { type: "android", label: "Android", link: "/platforms/android" },
      ],
    },
    {
      label: i18n.t("genres"),
      showAll: false,
      link: "/genres",
      list: [
        { type: "action", label: i18n.t("action"), link: "/genres/action" },
        { type: "strategy", label: i18n.t("strategy"), link: "/genres/strategy" },
        { type: "rpg", label: i18n.t("rpg"), link: "/genres/rpg" },
        { type: "shooter", label: i18n.t("shooter"), link: "/genres/shooter" },
        { type: "adventure", label: i18n.t("adventure"), link: "/genres/adventure" },
        { type: "puzzle", label: i18n.t("puzzle"), link: "/genres/puzzle" },
        { type: "racing", label: i18n.t("racing"), link: "/genres/racing" },
        { type: "sports", label: i18n.t("sports"), link: "/genres/sports" },
      ],
    },
  ];
};
const Sidebar = () => {
  const { i18n } = useTranslation("common");
  const [items, setItems] = useState(getItems(i18n));

  const handleShowAll = (index) => {
    const newItems = JSON.parse(JSON.stringify(items));
    newItems[index].showAll = !newItems[index].showAll;
    setItems(newItems);
  };
  return (
    <SidebarWrapper>
      <aside>
        <nav>
          {items.map((item, index) => {
            const props = {
              i18n,
              list: item.list,
              showAll: item.showAll,
              handleShowAll: () => handleShowAll(index),
            };
            return (
              <SidebarItem key={index}>
                {item.link ? (
                  <>
                    <Link href={item.link}>
                      <a>
                        <SidebarTitle>{item.label}</SidebarTitle>
                      </a>
                    </Link>
                    {item.list && <List {...props} />}
                  </>
                ) : (
                  <>
                    <SidebarTitle>{item.label}</SidebarTitle>
                    {item.list && <List {...props} />}
                  </>
                )}
              </SidebarItem>
            );
          })}
        </nav>
      </aside>
    </SidebarWrapper>
  );
};

const List = ({ i18n, list, showAll, handleShowAll }) => {
  let showAllBtn = null;
  if (list.length > 4) {
    let chevronProps = {
      down: true,
      margin: "-5px 0 0 0",
    };
    let title = i18n.t("showAll");
    if (showAll) {
      chevronProps = {
        up: true,
        margin: "5px 0 0 0",
      };
      title = i18n.t("hide");
    }
    showAllBtn = (
      <SidebarShowAllBtn onClick={handleShowAll} role="button">
        <SidebarIcon>
          <Chevron {...chevronProps} />
        </SidebarIcon>
        <SidebarListTitle fontSize="15">{title}</SidebarListTitle>
      </SidebarShowAllBtn>
    );
  }

  if (!showAll) {
    list = list.slice(0, 4); // first 3
  }
  return (
    <SidebarList>
      {list.map((item, index) => (
        <Link href={item.link} key={index}>
          <a>
            <SidebarListItem>
              <SidebarIcon>{getIcon(item.type)}</SidebarIcon>
              <SidebarListTitle>{item.label}</SidebarListTitle>
            </SidebarListItem>
          </a>
        </Link>
      ))}
      {showAllBtn}
    </SidebarList>
  );
};

export default Sidebar;
