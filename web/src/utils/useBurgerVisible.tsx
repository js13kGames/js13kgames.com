import {useWindowSize} from "./useWindowSize";

export function useBurgerVisible() {
  const burgerSize = useWindowSize();
  return burgerSize.innerWidth <= 1060;
}
