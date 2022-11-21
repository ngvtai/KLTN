import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { json } from 'body-parser';
import { UserQT } from "../../../Object/User";
import { DataServices } from "../../../Service/data.service";
import {  LoginService} from "../../../Service/login.module";
import { faUser,faSignIn } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message:String|undefined;
  faUser=faUser;
  faSignIn=faSignIn;
  constructor( private router: Router,
    private datas:DataServices,private logindata:LoginService ) { 
    this.datas.currentMessage.subscribe(message => this.message = message);
    if(localStorage.getItem('token'))
    {
      this.message=JSON.parse(localStorage.getItem("User")||"")[0].tenQT;
    }
    this.logindata.getVaiTro(localStorage.getItem("token")).subscribe(data=>{
      let checkdata= data as unknown as {"_token":number};
      if( checkdata._token==12)
      {
        alert("phien đăng nhập của bạn hết hạn vùi lòng đăng nhập lại");
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        this.router.navigate(['login']);
      }else if(checkdata._token==1){
        alert("phien đăng nhập của bạn hết hạn vùi lòng đăng nhập lại");
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        this.router.navigate(['login']);
      }
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
  }
  ngOnInit(): void {
  }
  login()
  {
    try {
      if(localStorage.getItem('token'))
      {
        if(confirm("banco muon dang nhap"))
        {
         localStorage.removeItem('token');
          localStorage.removeItem('User');
         this.router.navigate(['/login']);
         this.datas.changeMessage('login');
        }
      }else{
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }

     
  }
}
