export interface Dao<T> {
  all(): Promise<T[]>;
  clear();
  delete(params: object);
  findOne(params: object): Promise<T>;
  insertOrUpdate(model: T);
  get(params: object): Promise<T[]>;
  repository();
}
