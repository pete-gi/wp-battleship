import StoragePlugin, {
  StorageItem
} from "@/Models/Interfaces/StoragePluginInterface";
import { VueConstructor } from "vue/types/umd";

const Storage: StoragePlugin = {
  keys: [],
  /**
   * Pobiera wartość z LocalStorage, po drodze zmieniając odpowiednio jej typ
   * @method get
   * @param {string} key
   * @returns {StorageItem | null}
   */
  get: function(key: string): StorageItem | null {
    const rawValue: string | null = localStorage.getItem(`wp-${key}`);
    if (rawValue !== null) {
      const parsedValue = this.fromString(rawValue);
      if (parsedValue) {
        return parsedValue;
      }
      return rawValue;
    }
    return null;
  },

  /**
   * Ustawia wartość w LocalStorage pod danym kluczem
   * @method set
   * @param {string} key
   * @param {StorageItem} value
   */
  set: function(key: string, value: StorageItem): void {
    const stringValue = this.toString(value);
    localStorage.setItem(`wp-${key}`, stringValue);
    if (!this.keys.includes(key)) {
      this.keys.push(key);
    }
  },

  /**
   * Usuwa wartość z LocalStorage
   * @method delete
   * @param {string} key
   */
  delete(key: string): void {
    if (this.get(key)) {
      localStorage.removeItem(`wp-${key}`);
      const keyIndex: number = this.keys.findIndex(
        (storedKey: string) => storedKey === key
      );
      this.keys.splice(keyIndex, 1);
    }
  },

  clear: function(): void {
    this.keys.forEach((key: string) => {
      this.delete(key);
    });
  },

  /**
   * Zamienia wartość na formę stringa
   * @method toString
   * @param {Record<string, any> | any[]} value Obiekt lub tablica
   * @returns {string}
   */
  toString: function(value: StorageItem): string {
    if (typeof value === "object") {
      return JSON.stringify(value);
    } else if (typeof value === "number") {
      return String(value);
    }
    return value;
  },

  /**
   * Zwraca wartość w postaci stringa, liczby, obiektu lub tablicy
   * @method fromString
   * @param {value} string
   * @returns {StorageItem}
   */
  fromString: function(value: string): StorageItem {
    const numberValue = Number(value);
    if (!numberValue) {
      const parsedValue = JSON.parse(value);
      if (!parsedValue) {
        return value;
      }
      return parsedValue;
    }
    return numberValue;
  }
};

export default {
  install: (Vue: VueConstructor) => {
    Vue.prototype.$storage = Storage;
  }
};
