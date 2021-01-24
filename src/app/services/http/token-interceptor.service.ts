import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth : AuthService) { }

  intercept(request,next){
    let tokenRequest = request.clone({
      setHeaders : {
        'x-auth-token' : this.auth.getToken(),
        'x-auth-id' : 473
      }
    });
    return next.handle(tokenRequest)
  }
}
