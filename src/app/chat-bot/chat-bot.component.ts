import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { ChatBotService } from './services/chat-bot-service';
import { Message } from './model/login.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  // standalone: true,
  // imports: [CdkDrag],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  @ViewChild('messageInput') messageInputRef: ElementRef;

  // messages: Observable<Message[]>;
  messages: Message[] = [];
  botClose: boolean = true;
  open: boolean = false;

  constructor(private chatBotService: ChatBotService) { }

  ngOnInit(): void {
    this.chatBotService.getMessage().subscribe((message: Message) => {
      this.addMessage(message)
    })

    // this.messages = this.chatBotService.conversation.asObservable()
    // .scan((acc, val) => acc.conact(val))
  }

  sendMessages() {
    // this.chatBotService.converse.
  }

  closeBot() {
    this.open = false;
    this.botClose = false;
  }

  openBot() {
    this.botClose = true;
  }

  openChatBot() {
    this.open = true;
  }

  closeChatBot() {
    this.open = false;
  }

  sendMessage() {
    const message = this.messageInputRef.nativeElement.value;
    this.chatBotService.sendMessage(message);
  }

  addMessage(message) {
    this.messages.push(message);
  }

}
