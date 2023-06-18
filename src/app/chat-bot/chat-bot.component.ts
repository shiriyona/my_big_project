import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-bot',
  // standalone: true,
  // imports: [CdkDrag],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  bot: boolean = true;
  open: boolean = false;

  constructor(router:Router) { }

  ngOnInit(): void {
  }

  openChatBot() {
    this.open = true;
  }

  closeChatBot() {
    this.open = false;
  }

}
