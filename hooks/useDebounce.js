import { useEffect } from "react";
import useTimeout from "./useTimeout";

// used for fetching the data from the search input, adding a little bit of a delay
// so our requests aren't instanteneous.
const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};

export default useDebounce;
