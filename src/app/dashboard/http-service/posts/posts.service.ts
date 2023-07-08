import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
  // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }

 
}
