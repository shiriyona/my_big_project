import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatBotService } from '../../services/chat-bot-service';
import { Message } from '../../model/message.model';
import { ChatMessagesService } from '../../services/chat-messages.service';

@Component({
  selector: 'app-chat-bot',
  // standalone: true,
  // imports: [CdkDrag],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  @ViewChild('messageInput') messageInputRef: ElementRef;

  value: string;
  messages: Message[] = [];
  botClose: boolean = true;
  open: boolean = false;

  constructor(private chatBotService: ChatBotService, private msg: ChatMessagesService) { }

  ngOnInit(): void {
    this.getMessages()
    this.chatBotService.getNewMessage().subscribe((message: Message) => {
      this.addMessage(message)
    })
  }

  getMessages() {
    this.chatBotService.getMessages().subscribe(res => {
      this.messages = res;
    }); 

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
    const message: string = this.messageInputRef.nativeElement.value;
    const bot = false;
    const newMessage = {
      con: message,
      bot: bot
    }
    this.chatBotService.sendMessage(newMessage);
    this.msg.getBotAnswer(this.value);
    this.value = '';
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

}
