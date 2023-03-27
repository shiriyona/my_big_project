
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {
  constructor(private http: HttpClient) { }

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post('/api/v1/image-upload', formData);
  }
  
}
