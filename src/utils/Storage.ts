"use client";

enum StorageType {
  Local = "localStorage",
  Session = "sessionStorage",
}

class Storage {
  storageKey: string;
  storageType: StorageType;

  constructor(storageKey: string, storageType = StorageType.Local) {
    this.storageKey = storageKey;
    this.storageType = storageType;
  }

  read(key: string) {
    if (typeof window === "undefined") return null;

    try {
      const rawValue = window[this.storageType].getItem(
        `${this.storageKey}:${key}`
      );
      return rawValue ? JSON.parse(rawValue) : null;
    } catch (err) {
      console.log(`[shu:${this.storageType}:error]`, err);
    }

    return null;
  }

  write(key: string, value: unknown) {
    if (typeof window === "undefined") return;

    try {
      window[this.storageType].setItem(
        `${this.storageKey}:${key}`,
        JSON.stringify(value)
      );
    } catch (err) {
      console.log(`[shu:${this.storageType}:error]`, err);
    }
  }

  clear(key: string) {
    if (typeof window === "undefined") return;

    try {
      window[this.storageType].removeItem(`${this.storageKey}:${key}`);
    } catch (err) {
      console.log(`[shu:${this.storageType}:error]`, err);
    }
  }

  clearAll() {
    try {
      // window[this.storageType].clear();
      Object.keys(window[this.storageType])
        .filter((key) =>
          new RegExp("^" + this.storageKey + ":.+", "gi").test(key)
        )
        .forEach((key) => {
          window[this.storageType].removeItem(key);
        });
    } catch (err) {
      console.log(`[shu:${this.storageType}:error]`, err);
    }
  }
}

export default Storage;
