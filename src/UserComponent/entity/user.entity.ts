import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
// entity로 생성한 user를 repository로 주입
@Entity()
@Index(['userId', 'email'])
export class User {
  @PrimaryGeneratedColumn()
  userSeq: number;

  @Column({ length: 40, unique: true })
  userId: string;

  @Column({ length: 256, nullable: false })
  password: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 40, unique: true })
  email: string;
}
