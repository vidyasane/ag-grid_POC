import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getJsonData(){
    return this.http.get('http://localhost:3000/jsonData');
  }
}
