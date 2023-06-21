import { Injectable } from "@angular/core";
import { Message } from "../model/message.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ChatMessagesService { 
    conversation = new Subject<Message[]>();
    messageMap = {
      "Hi": "Hello",
      "Who are you": "My name is Test Sat Bot",
      "What is your role": "Just guide for the user",
      "defaultmsg": "I can't understand your text. Can you please repeat"
    }
    
    constructor() {
    }

    onInit() { }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}