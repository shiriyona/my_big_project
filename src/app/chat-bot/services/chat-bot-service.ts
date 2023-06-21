import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';
import { Subject, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ChatBotService {
    message: Message[] = [
        {con: "Hi! 👋 it's great to see you!", bot: true},
        {con: "Hi! 👋 it's great to see you!", bot: false}
]
    subject = new Subject

    constructor() {
    }

    onInit() { }

    getMessages() {
        return of(this.message);
    }

    sendMessage(messgae) {
        this.subject.next(messgae);
    }

    getNewMessage() {
        return this.subject.asObservable();
    }

}