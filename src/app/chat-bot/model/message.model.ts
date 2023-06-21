export class Message {
  con: string;
  bot: boolean;
  answer: string

    constructor(message: string, bot: boolean, answer: string) {     
      this.con = message;
      this.bot = bot;
      this.answer = answer;
    }
}