import { User } from '../models/login.model';
import { USER_ROLE } from 'src/app/shared/enums/user-role.enum';
import { v4 as uuidv4 } from 'uuid';


export const USER_MOCK_DATA: User[]  = [
  {
    id: uuidv4(),
    userName: 'admin1',
    password: '1234',
    role: USER_ROLE.ADMIN,
    firstName: 'Nicole',
    lastName: 'Love',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'admin2',
    password: '1234',
    role: USER_ROLE.ADMIN,
    firstName: 'Steve',
    lastName: 'Jones',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'admin3',
    password: '3333',
    role: USER_ROLE.ADMIN,
    firstName: 'Marly',
    lastName: 'London',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'user1',
    password: '1111',
    role: USER_ROLE.SALER,
    firstName: 'Efrat',
    lastName: 'Stav',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'user2',
    password: '2222',
    role: USER_ROLE.SALER,
    firstName: 'Libby',
    lastName: 'Weis',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'rinat',
    password: '1111',
    role: USER_ROLE.SALER,
    firstName: 'Rinat',
    lastName: 'Levi',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'user4',
    password: '1111',
    role: USER_ROLE.SALER,
    firstName: 'Bill',
    lastName: 'Dolev',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'admin5',
    password: '1111',
    role: USER_ROLE.ADMIN,
    firstName: 'Ron',
    lastName: 'Daz',
    img: '../../../../assets/img/providers_pic.png'
  },
  {
    id: uuidv4(),
    userName: 'admin5',
    password: '1111',
    role: USER_ROLE.ADMIN,
    firstName: 'Liv',
    lastName: 'Kaz',
    img: '../../../../assets/img/providers_pic.png'
  },
  ];
