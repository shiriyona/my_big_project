import { User } from '../models/login.model';
import { USER_ROLE } from 'src/app/shared/enums/user-role.enum';

export const userS_MOCK_DATA: User[]  = [
  {
    userName: 'admin1',
    password: '1234',
    role: USER_ROLE.ADMIN
  },
  {
    userName: 'admin2',
    password: '1234',
    role: USER_ROLE.ADMIN
  },
  {
    userName: 'admin3',
    password: '3333',
    role: USER_ROLE.ADMIN
  },
  {
    userName: 'user1',
    password: '1111',
    role: USER_ROLE.SALER
  },
  {
    userName: 'user2',
    password: '2222',
    role: USER_ROLE.SALER
  },
  ];
