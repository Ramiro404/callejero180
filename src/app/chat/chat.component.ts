import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MESSAGES } from '../mock/mock-messages';
import { Message } from '../model/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  alignStart: boolean = true;
  messages:Message[] = [];
  constructor() { }

  ngOnInit(): void {
    this.messages = MESSAGES;
  }

  sendMessage(result: NgForm){
    console.log(result.value.message);
    this.messages.push({
      message: result.value.message,
      user: 2
    });
  }

}
