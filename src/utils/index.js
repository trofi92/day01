const TOKEN_KEY = "jwt";

export const loggedIn = () => {
  localStorage.setItem(TOKEN_KEY, "login");
};
export const loggedOut = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};
