import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatBotService, Message } from '../../services/chat-bot-service';
// import { Message } from '../../model/message.model';

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

  constructor(private chatService: ChatBotService) { }

  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
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

}
