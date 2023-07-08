import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import {  map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject('API_URL') private url:string, private http: HttpClient) {
   }
  getAll() {
    return this.http.get<any[]>(this.url).pipe(
        map(response => response),
        catchError(this.handleError)
      );  }

  create(resource: any) {
    return this.http.post(this.url!, JSON.stringify(resource))
    .pipe(
      catchError(this.handleError)
      );
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
  }

  delete(id: any) {
    console.log(id);
  

    return this.http.delete(this.url+ '/' + id)
    .pipe(
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400)
      return throwError(() => new BadInput(error));
    if (error.status === 404)
      return throwError(() => new NotFoundError());
    return  throwError(() => new AppError(error));
  }

}
