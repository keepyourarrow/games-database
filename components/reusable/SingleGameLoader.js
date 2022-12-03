import ContentLoader from "react-content-loader";

// Skeleton loader
const SingleGameLoader = () => {
  return (
    <div>
      <ContentLoader
        height={550}
        speed={4}
        backgroundColor={"#333"}
        foregroundColor={"rgba(255,255,255,0.1"}
        viewBox="0 0 450 250"
      >
        {/* Head */}
        <rect x={0} y={0} rx={5} ry={5} width="40" height="10" />
        <rect x={50} y={0} rx={5} ry={5} width="15" height="10" />
        <rect x={67} y={0} rx={5} ry={5} width="15" height="10" />
        <rect x={84} y={0} rx={5} ry={5} width="15" height="10" />
        <rect x={101} y={0} rx={5} ry={5} width="15" height="10" />
        <rect x={125} y={0} width="80" height="10" />
        {/* Body */}
        <rect x={0} y={30} width="180" height="20" />
        <rect x={50} y={60} width="80" height="20" />
        {/* score */}
        <rect x={0} y={100} rx={5} ry={5} width="200" height="30" />
        {/* first block */}
        <rect x={0} y={140} rx={5} ry={5} width="10" height="10" />
        <rect x={13} y={140} rx={5} ry={5} width="40" height="10" />
        <rect x={55} y={140} rx={5} ry={5} width="10" height="10" />
        {/* second block */}
        <rect x={75} y={140} rx={5} ry={5} width="10" height="10" />
        <rect x={88} y={140} rx={5} ry={5} width="40" height="10" />
        <rect x={130} y={140} rx={5} ry={5} width="10" height="10" />
        {/* third block */}
        <rect x={150} y={140} rx={5} ry={5} width="10" height="10" />
        <rect x={163} y={140} rx={5} ry={5} width="40" height="10" />
        <rect x={205} y={140} rx={5} ry={5} width="10" height="10" />
        {/* About */}
        <rect x={0} y={170} width="60" height="10" />
        <rect x={0} y={190} width="230" height="10" />
        <rect x={0} y={205} width="230" height="10" />
        <rect x={0} y={220} width="230" height="10" />
        <rect x={0} y={235} width="230" height="10" />
      </ContentLoader>
    </div>
  );
};

export default SingleGameLoader;
