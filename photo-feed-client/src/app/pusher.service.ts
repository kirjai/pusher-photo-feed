import { Injectable } from '@angular/core';
declare const Pusher;

@Injectable()
export class PusherService {
  pusher: any;

  constructor() {
    this.pusher = new Pusher('xxxxxxxxx', {cluster: 'xxx'});
    this.pusher.logToConsole = true;
  }

}