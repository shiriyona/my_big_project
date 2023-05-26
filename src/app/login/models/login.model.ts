import { USER_ROLE } from "src/app/shared/enums/user-role.enum";

export class User {
    id: string
    userName: string
    password: string;
    role: USER_ROLE;    
    firstName: string;
    lastName: string;
    img: string;

    constructor(id: string, userName: string, firstName: string, lastName: string, password: string, role: USER_ROLE,  img: string) {     
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.role = role;      
      this.firstName = firstName;
      this.lastName = lastName;
      this.img = img;
    }
}