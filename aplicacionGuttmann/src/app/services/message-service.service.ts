import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  message:string = "";

  sendMessage(message: string) {
    console.log(message);
    this.message=message;
  }

  clearMessage() {
    this.message="";
  }

  getMessage(): String {
    return this.message;
  }

}
