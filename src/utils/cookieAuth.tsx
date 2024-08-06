import { setCookie, getCookie } from "./cookies";
export const signIn = (token: string) => {
  setCookie("_auth", JSON.stringify({ token }));
  return true;
};

export const isAuth = () => {
  return getCookie("_auth");
};
