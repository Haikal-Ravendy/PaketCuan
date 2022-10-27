import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Account } from 'src/entities/account';
import { ConnectionOptions, createConnection, getConnection } from 'typeorm';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private platform: Platform) { }

  private createConnection() {
    let dbOptions: ConnectionOptions;

    if (this.platform.is('cordova')) {
      dbOptions = {
        type: 'cordova',
        database: '__maindb',
        location: 'default'
      };
    } else {
      dbOptions = {
        type: 'sqljs',
        location: 'browser',
        autoSave: true
      };
    }

    Object.assign(dbOptions, {
      logging: ['error', 'query', 'schema'],
      synchronize: false,
      entities: [
        Account
      ]
    });
    return createConnection(dbOptions);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  async ready() {
    try {
      await getConnection();
    } catch (e) {
      console.log('Connection not established!', e);
      await this.createConnection();
    }
  }
}
