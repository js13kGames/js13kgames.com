import {useEffect, useState} from "react";
function getSize() {
  return typeof window === "undefined"
    ? {
        innerHeight: 0,
        innerWidth: 0,
        outerHeight: 0,
        outerWidth: 0,
      }
    : {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
      };
}
export function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());
  function handleResize() {
    setWindowSize(getSize());
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}
