import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  images: Array<string> = [];

  constructor(private pusherService: PusherService) {}

  ngOnInit() {
    const channel = this.pusherService.pusher.subscribe('pics');
    channel.bind('new-listing', (listing) => {
      console.log(listing);
      const imageUrl = listing.url;
      this.images.unshift(imageUrl);
    });
  }
}
