export class Users {
    firstName: string;
    lastName: string;  
    id: number;
    country: string;
    city: string;  
    age: number;
    desc: string
    img: string;

  
  
    constructor(firstName: string, lastName: string, id: number, country: string, city: string, age: number, img: string) {   
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
      this.country = country;
      this.city = city;
      this.age = age;
      // this.desc=desc 
      this.img = img;

    }
}
