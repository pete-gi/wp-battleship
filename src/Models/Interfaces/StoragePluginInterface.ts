export type StorageItem = string | number | Record<string, any> | any[];

export default interface StoragePlugin {
  keys: string[];
  get: (key: string) => StorageItem | null;
  set: (key: string, value: StorageItem) => void;
  delete: (key: string) => void;
  clear: () => void;

  toString: (value: StorageItem) => string;
  fromString: (value: string) => StorageItem;
}
