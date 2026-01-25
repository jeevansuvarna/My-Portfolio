import { incrementPageView } from './firebase';

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

export const setCookie = (name, value, hours) => {
  const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export const getCookie = (name) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='))
    ?.split('=')[1];
};

export const generateProfileId = () => {
  return crypto.randomUUID(); // safe + unique
};

export const handlePageView = async () => {
  const profileId = getCookie('profileId');

  const sameuser = (profileId != undefined || profileId != null) ? true : false;
  // New visitor OR expired cookie
  const newProfileId = generateProfileId();

  setCookie('profileId', newProfileId, 24); // expires in 24h
  return await incrementPageView(sameuser);
};
