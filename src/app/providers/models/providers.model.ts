export class Provider {
    position: number;
    firstName: string;
    lastName: string;
    phone: string;
    id: string;
    email: string
    addres: string
    description: string;
    img: string;

  
  
    constructor(position: number, firstName: string, lastName: string, phone: string, id: string, email: string, desc: string, img: string) {  
      this.position = position; 
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.id = id;
      this.email = email;
      this.addres = this.addres;
      this.description = desc;
      this.img = img;
    }
}

