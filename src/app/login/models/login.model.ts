import { USER_ROLE } from "src/app/shared/enums/user-role.enum";

export class User {
    id: string
    userName: string
    password: string;
    role: USER_ROLE;    
    firstName: string;
    laststName: string;
    img: string;

    constructor(id: string, userName: string, firstName: string, lastName: string, password: string, role: USER_ROLE,  img: string) {     
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.role = role;      
      this.firstName = firstName;
      this.laststName = lastName;
      this.img = img;
    }
}