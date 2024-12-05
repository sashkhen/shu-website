"use client";

class Cookie {
  storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  get(name: string) {
    const v = document.cookie.match(
      "(^|;) ?" + `${this.storageKey}:${name}` + "=([^;]*)(;|$)"
    );
    return v ? v[2] : null;
  }

  set(name: string, value: string, days = 30) {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie =
      `${this.storageKey}:${name}` +
      "=" +
      value +
      ";path=/;expires=" +
      d.toUTCString();
  }

  delete(name: string) {
    this.set(`${this.storageKey}:${name}`, "", -1);
  }
}

export default Cookie;
