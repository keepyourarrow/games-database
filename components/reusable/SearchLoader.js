import React from "react";
import ContentLoader from "react-content-loader";

// Skeleton loader
const SearchLoader = ({ isSmallScreen }) => {
  const content = [{ y: 20 }, { y: 60 }, { y: 100 }];

  let titleY = 0;
  let viewBox = "0 0 250 135";
  let contentHeight = 350;

  if (isSmallScreen) {
    viewBox = "0 0 250 305";
    titleY = 3;
    contentHeight = 750;
    content.push({ y: 140 }, { y: 180 }, { y: 220 });
  }
  return (
    <div>
      <ContentLoader
        height={contentHeight}
        speed={4}
        backgroundColor={"#333"}
        foregroundColor={"rgba(255,255,255,0.1"}
        viewBox={viewBox}
      >
        <rect x="0" y={titleY} rx="2" ry="2" width="35" height="12" />
        <rect x="37" y={titleY} rx="2" ry="2" width="15" height="12" />

        {content.map((item) => (
          <React.Fragment key={item.y}>
            <rect x="0" y={item.y} rx="5" ry="5" width="25" height="35" />
            <rect x="30" y={item.y} rx="4" ry="4" width="30" height="13" />
            <rect x="30" y={item.y + 17} rx="3" ry="3" width="60" height="10" />
          </React.Fragment>
        ))}
      </ContentLoader>
    </div>
  );
};

export default SearchLoader;
