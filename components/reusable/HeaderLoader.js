import ContentLoader from "react-content-loader";

// Skeleton loader
const HeaderLoader = ({ height = 150 }) => {
  return (
    <div>
      <ContentLoader
        height={height}
        speed={4}
        backgroundColor={"#333"}
        foregroundColor={"rgba(255,255,255,0.1"}
        viewBox={`0 0 150 20`}
      >
        <rect x={0} y={0} width="150" height="15" />
      </ContentLoader>
    </div>
  );
};

export default HeaderLoader;
