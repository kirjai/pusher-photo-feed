import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  constructor(private http: Http) {}

  getAll(): Observable<Array<string>> {
    return this.http.get('http://localhost:3000/images')
      .map(response => response.json());
  }

  upload(data: string): Observable<any> {
    return this.http.post('http://localhost:3000/image', {image: data})
      .map(response => response.json());
  }

}
