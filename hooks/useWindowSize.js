import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([undefined, undefined]);
  useEffect(() => {
    setSize([window.innerHeight, window.innerWidth]);

    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;
