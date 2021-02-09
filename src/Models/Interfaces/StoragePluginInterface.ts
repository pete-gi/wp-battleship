export type StorageItem = string | number | Record<string, any> | any[];

export default interface StoragePlugin {
  get: (key: string) => StorageItem | null;
  set: (key: string, value: StorageItem) => void;

  toString: (value: StorageItem) => string;
  fromString: (value: string) => StorageItem;
}
