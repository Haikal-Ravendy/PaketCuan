import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const ACCOUNT_TABLE = 'account';

@Entity(ACCOUNT_TABLE)
export class Account{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  balance: number;

  @Column()
  avatar: string;

  @Column()
  cardNumber: number;


}
