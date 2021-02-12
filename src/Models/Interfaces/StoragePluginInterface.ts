export type StorageItem = string | number | Record<string, any> | any[];

export default interface StoragePlugin {
  keys: string[];
  get: (key: string) => StorageItem | StorageItem[] | null;
  set: (key: string, value: StorageItem | StorageItem[]) => void;
  delete: (key: string) => void;
  clear: () => void;

  toString: (value: StorageItem) => string;
  fromString: (value: string) => StorageItem;
}
