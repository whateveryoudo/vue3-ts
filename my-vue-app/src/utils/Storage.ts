/*
 * @Author: ykx
 * @Date: 2022-04-25 17:24:45
 * @LastEditTime: 2022-04-25 17:58:47
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\utils\Storage.ts
 */
// 默认缓存期限为7天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;
export const createStorage = ({ prefix = "", storage = localStorage } = {}) => {
  const Storage = class {
    private storage = storage;
    private prefix?: string = prefix;
    private getKey(key: string) {
      return `${this.prefix}${key}`.toUpperCase();
    }
    // 过期传入秒数
    set(key: string, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
      const strData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
      });
      this.storage.setItem(this.getKey(key), strData);
    }
    get<T = any>(key: string, def: any = null): T {
      const item = this.storage.getItem(this.getKey(key));
      if (item) {
        try {
          const { value, expire } = JSON.parse(item);
          if (expire === null || expire > Date.now()) {
            return value;
          } else {
            this.remove(this.getKey(key));
          }
        } catch (error) {
          return def;
        }
      }
      return def;
    }
    remove(key: string) {
      this.storage.removeItem(key);
    }
  };
  return new Storage();
};
export default createStorage();
