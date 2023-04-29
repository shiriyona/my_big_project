export class Email {
    id: string;
    subject: string;
    name: string;
    date: number;
    description: string;
  
    constructor( id: string, subject: string, name: string, date: number, description: string) {     
      this.id = id;
      this.subject = subject;
      this.name = name;
      this.date = date;
      this.description = description;
    }
}