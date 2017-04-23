import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
declare const Pusher;

@Injectable()
export class PusherService {
  pusher: any;

  constructor() {
    this.pusher = new Pusher('50ed18dd967b455393ed');
    if (!environment.production) {
      this.pusher.logToConsole = true;
    }
  }

}