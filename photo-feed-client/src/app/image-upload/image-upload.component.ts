import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html'
})
export class ImageUploadComponent implements OnInit {
  private fileReader = new FileReader();

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.fileReader.addEventListener('loadend', (event: ProgressEvent) => {
      const file: string = (<FileReader>event.target).result;
      this.imageService.upload(file)
        .subscribe();
    });
  }

  uploadFile(event: any): void {
    const file: File = event.target.files[0];
    this.fileReader.readAsDataURL(file);
  }

}
