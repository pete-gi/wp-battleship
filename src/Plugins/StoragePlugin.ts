import StoragePlugin, {
  StorageItem
} from "@/Models/Interfaces/StoragePluginInterface";
import { VueConstructor } from "vue/types/umd";

const Storage: StoragePlugin = {
  /**
   * Pobiera wartość z LocalStorage, po drodze zmieniając odpowiednio jej typ
   * @method get
   * @param {string} key
   * @returns {StorageItem | null}
   */
  get: function(key: string): StorageItem | null {
    const rawValue: string | null = localStorage.getItem(key);
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
    localStorage.setItem(key, stringValue);
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
