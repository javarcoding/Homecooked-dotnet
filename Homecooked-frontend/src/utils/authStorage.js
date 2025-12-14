const AUTH_KEY = "homecooked_auth";

export const saveAuthToStorage = (data) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(data));
};

export const getAuthFromStorage = () => {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearAuthFromStorage = () => {
  localStorage.removeItem(AUTH_KEY);
};
