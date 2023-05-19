import { USER_ROLE } from "src/app/shared/enums/user-role.enum";

export class User {
    userName: string
    password: string;
    role: USER_ROLE;

    constructor( userName: string, password: string, role: USER_ROLE) {     
      this.userName = userName;
      this.password = password;
      this.role = role;
    }
}