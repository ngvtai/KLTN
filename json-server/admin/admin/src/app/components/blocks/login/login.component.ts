import { Component, Input, OnInit, Output } from '@angular/core';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserQT,Login } from "../../../Object/User";
import { Router } from '@angular/router';
import { LoginService } from "../../../Service/login.module";
import { DataServices } from "../../../Service/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  error:String="";
  username:string;
  password:string;
  message:string|undefined;
  constructor( private loginService:LoginService, private router: Router,private dataservice:DataServices)  {
      this.dataservice.currentMessage.subscribe(message => this.message = message);
      if(localStorage.getItem('User'))
      {
       this.router.navigate(['/']);
      }
      this.username="";
      this.password="";
  }
  ngOnInit(): void {  
  }
  public onSubmit() 
  {
      this.loginService.getLogin(new Login(this.username, this.password)).subscribe(data=>{
         let data2=data as {"status":boolean,user:any,_token:String};
          if(data2.status==true)
          {
            console.log(data2);
            localStorage.setItem('token',data2._token.toString());
            localStorage.setItem('User',JSON.stringify(data2.user));
            this.router.navigate(['/']);
            console.log(data2.user);
            this.dataservice.changeMessage(JSON.parse(localStorage.getItem("User")||"")[0].tenQT);
          }
          else{
            this.error="sai tài khoản và mật khẩu"
          }
    },error=>{
        console.log('oops', error); 
        this.router.navigateByUrl('/');
    });
  }
}

