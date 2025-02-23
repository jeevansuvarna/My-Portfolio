export const detectMobileWidth = (isMobile = false) => {
  const widthToCompare = isMobile ? 480 : 768;
  if (typeof window != undefined) {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    return width <= widthToCompare;
  }
};
