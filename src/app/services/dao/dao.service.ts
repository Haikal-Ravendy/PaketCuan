import { Injectable } from '@angular/core';
import { Account, ACCOUNT_TABLE } from 'src/entities/account';
import { getRepository } from 'typeorm';
import { Dao } from './dao';

@Injectable({
  providedIn: 'root'
})
export class DaoService implements Dao<Account> {

  constructor() { }
  all(): Promise<Account[]> {
    return this.repository().find();
  }
  clear() {
    return this.repository().clear();
  }
  delete(params: object) {
    return this.repository().delete(params);
  }
  findOne(params: object): Promise<Account> {
    return this.repository().findOne(params);
  }
  insertOrUpdate(model: Account) {
    return this.repository().save(model);
  }
  get(params: object): Promise<Account[]> {
    return this.repository().find(params);
  }
  repository() {
    return getRepository<Account>(ACCOUNT_TABLE);
  }
}
