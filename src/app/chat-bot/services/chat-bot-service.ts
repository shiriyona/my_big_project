import { Injectable } from '@angular/core';
import { Message } from '../model/login.model';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ChatBotService {
    userMessage: Message[] = [{message: "Hi! 👋 it's great to see you!"}
]
    subject = new Subject

    constructor() {
    }

    onInit() { }

    sendMessage(messgae) {
        this.subject.next(messgae);
    }

    getMessage() {
        return this.subject.asObservable();
    }

}