import { Injectable } from '@angular/core';
// import { Message } from '../model/message.model';
import { Subject, of } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  //     message: Message[] = [
  //         {con: "Hi! 👋 it's great to see you!", bot: true},
  //         {con: "Hi! 👋 it's great to see you!", bot: false}
  // ]
  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap = [
    {
      listOfQuetions: ["hi", "hello"],
      answer: "Hello"
    },
    {
      listOfQuetions: ["Who are you", "Who you"],
      answer: "My name is Test Sat Bot"
    },
    {
      listOfQuetions: ["What is your role"],
      answer: "Just guide for the user"
    },
    {
      listOfQuetions: ["defaultmsg"],
      answer: "I can't understand your text. Can you please repeat"
    },
    {
      listOfQuetions: ["Who are you", "Who you"],
      answer: "My name is Test Sat Bot"
    },
    {
      listOfQuetions: ["Who are you", "Who you"],
      answer: "My name is Test Sat Bot"
    },
  ]

  getBotAnswer(question) {
        const userMessage = new Message('user', question);
        this.conversation.next([userMessage])
        const botMessage = new Message('bot', this.getBotMessage(question));
        setTimeout(() => {
          this.conversation.next([botMessage]);
        }, 1500);

  }

  // getBotAnswer(msg: string) {
  //   const userMessage = new Message('user', msg);
  //   this.conversation.next([userMessage]);
  //   const botMessage = new Message('bot', this.getBotMessage(msg));
  //   setTimeout(() => {
  //     this.conversation.next([botMessage]);
  //   }, 1500);
  // }
  getBotMessage(question) {
    const msg = question.toLowerCase();
    for(let i = this.messageMap.length - 1; i >= 0; i--) {
      if (this.messageMap[i].listOfQuetions === msg){
        return  this.messageMap[i].answer
      }
    }
    return "I can't understand your text. Can you please repeat";
  }

}