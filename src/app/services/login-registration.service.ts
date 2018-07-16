import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {  
 
  constructor(private http: Http) { }
 
  private _getHeaders():Headers {
    let header = new Headers({
      'Content-Type': 'application/json'
    }); 
    return header;
 }

  public login(data){  
    let options = new RequestOptions({
      headers: this._getHeaders()
   });       
    return this.http.post('http://localhost/testdempo/api/login',JSON.stringify(data),options);
  }

}
