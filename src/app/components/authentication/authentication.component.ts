import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor( public auth : AuthService, public router : Router) { }
  notValidUser : boolean = false;
  loginForm = new FormGroup({
    user_name : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  onLogin(){
    if(this.loginForm.valid){
      //Assuming login api hit
      if(this.loginForm.get('user_name').value == 'abc@xyz.com' && this.loginForm.get('password').value == "H@ppyCoding"){
        this.auth.setToken();
        this.router.navigate(['/']);
      }
      else{
        this.notValidUser = true;
      }
    }else{
      this.loginForm.markAllAsTouched();
    }
    
  }
  
  ngOnInit(): void {
    
  }

}
