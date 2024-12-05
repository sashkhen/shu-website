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
    try {
      window[this.storageType].removeItem(`${this.storageKey}:${key}`);
    } catch (err) {
      console.log(`[shu:${this.storageType}:error]`, err);
    }
  }

  clearAll() {
    try {
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
