import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localStorage_token_name : string = 'token';
  token : string = "1095f37a9006fddd68927efaf35b32c1";
  constructor() { }

  setToken(){
    localStorage.setItem(this.localStorage_token_name,this.token);
  }
  getToken(){
    let userToken = localStorage.getItem(this.localStorage_token_name);

    if(userToken){
      return userToken;
    }
    else{
      return false;
    }
  }
  remoteToken(){
    localStorage.removeItem(this.localStorage_token_name);
  }
}
