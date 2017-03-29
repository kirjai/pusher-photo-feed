import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { ImageService } from './image.service';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PusherService } from './pusher.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ImageService, PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
