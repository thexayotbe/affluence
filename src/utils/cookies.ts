import Cookies from "js-cookie";

// Set a cookie
export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value, { expires: 3 });
};

// Get a cookie
export const getCookie = (name: string): boolean | undefined => {
  return Cookies.get(name) ? true : false;
};

// Remove a cookie
export const removeCookie = (name: string) => {
  Cookies.remove(name);
};
