export class Email {
  id: number;
    subject: string;
    name: string;
    time: string;
    description: string;
  
    constructor( id: number, subject: string, name: string, time: string, description: string) {     
      this.id = id;
      this.subject = subject;
      this.name = name;
      this.time = time;
      this.description = description;
    }
}