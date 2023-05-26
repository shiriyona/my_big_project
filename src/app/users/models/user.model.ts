import { User } from "src/app/login/models/login.model";
import { USER_ROLE } from "src/app/shared/enums/user-role.enum";

export class UserDetails {
    id: string;
    firstName: string;
    lastName: string;
    img: string;
    role: USER_ROLE;    

    constructor(user: User) { 
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.img = user.img;
      this.role = user.role;
    }
}