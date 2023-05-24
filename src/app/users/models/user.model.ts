import { User } from "src/app/login/models/login.model";

export class UserDetails {
    id: string;
    firstName: string;
    lastName: string;
    img: string;

    constructor(user: User, firstName: string, lastName: string, img: string) { 
      this.id = user.id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.img = img;
    }
}