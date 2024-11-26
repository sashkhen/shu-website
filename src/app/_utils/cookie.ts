export const getCookie = (name: string) => {
  const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
};

export const setCookie = (name: string, value: string, days = 30) => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toString();
};

export const deleteCookie = (name: string) => {
  setCookie(name, "", -1);
};

const cookie = {
  get: getCookie,
  set: setCookie,
  delete: deleteCookie,
};

export default cookie;
