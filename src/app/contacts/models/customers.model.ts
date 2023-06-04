export class Customer {
  firstName: string;
  lastName: string;
  phone: string;
  id: number;
  country: string;
  city: string;
  age: number;
  status: string
  img: string;

  constructor(firstName: string, lastName: string, phone: string, id: number, country: string, city: string, age: number, status: string, img: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.id = id;
    this.country = country;
    this.city = city;
    this.age = age;
    this.status = status;
    this.img = img;
  }
}
