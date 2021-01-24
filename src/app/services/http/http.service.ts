import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpRequest : HttpClient, private auth : AuthService) { }
  
  getQueryParam(obj): HttpParams {
    let search = new HttpParams();
    for (let key in obj) {
      search = search.set(key, obj[key]);
    }
    return search;
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    let data = this.auth.getToken();
   
    if(data) {
      headers = headers.set('x-auth-token', `${data}`);
      headers = headers.set('x-auth-id', '473');
    }
    return headers;
  }

  getWithParams(URL, body, params?: {}){
    
    return this.httpRequest.get(URL, { params: body, headers : this.getHeaders(), withCredentials: false }).pipe();
  }
 
}
