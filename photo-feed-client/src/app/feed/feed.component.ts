import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import 'rxjs/add/operator/do';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  images: Array<string> = [];

  constructor(
    private imageService: ImageService,
    private pusherService: PusherService,
  ) {}

  ngOnInit() {
    this.getImages();
    this.initPusherListener();
  }

  private getImages() {
    this.imageService.getAll()
      .subscribe(
        (images) => {this.images = images}
      )
  }

  private initPusherListener() {
    const channel = this.pusherService.pusher.subscribe('images');
    channel.bind('new-image', (imageUrl) => {
      this.images.push(imageUrl);
    });
  }

}