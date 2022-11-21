import { Component, OnInit } from '@angular/core';
import { faTimesCircle,faCheck  } from '@fortawesome/free-solid-svg-icons';
import {UserQT,VaiTro,HeThong} from "../../../../Object/User";
import { Router  } from "@angular/router";
import {  Datatalbemu } from "../../../../Service/api.service";
import { LoginService } from "../../../../Service/login.module";
import { SystemComponent } from "../../system/system.component";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addsys',
  templateUrl: './addsys.component.html',
  styleUrls: ['./addsys.component.css']
})
export class AddsysComponent implements OnInit {

  countryForm!: FormGroup;
  //truyen bien mo the 
  
  // @Output()@Input() exittable: boolean |undefined;
  exittable:boolean=false;
  //khai bao bien 
  maHT:string; username:string; 
  //khai bao icon
  faTimesCircle=faTimesCircle;  faCheck=faCheck;
  //khai bao bien kiem tra 
  idHT:string="";
  buttonc:boolean=true;
  mahtc:number;usernamec:number;
  // khoi tao mang vai tro va he thong

  HeThong:HeThong[]=[];
  //bien kiem tra ky tu dat biet 
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;

  constructor(private loginService:LoginService,private router:Router, private datas2: Datatalbemu,private sys:SystemComponent) { 
    this.datas2.currentMessageSYS.subscribe(message => this.exittable = message);
    this.datas2.currentMessageSYSID.subscribe(message => this.idHT = message);
    this.usernamec=0; this.mahtc=0; 
    this.buttonc=true;
    this.maHT="";  this.username=""; 
 
  }
  ngOnInit(): void {
  }
  outtable()
  {
    this.maHT="";  this.username=""; 
    this.datas2.changeMessageSYSID(this.idHT="");
    this.datas2.changeMessageSYS(!this.exittable);
  }
  dangky()
  {
      this.loginService.insertsystem(new HeThong(this.maHT,this.username,undefined),localStorage.getItem("token")).subscribe(data=>{
        if(data==1)
        {
          alert("Thêm tài khoản thành công");
          this.datas2.changeMessageSYS(!this.exittable);
          this.maHT="";
          this.username="";
          this.sys.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
    
  }
  checkerror(objectcheck:string, returncheck:number)
  {
    if(objectcheck!="")
    { 
         for (let i = 0; i < objectcheck.length; i++) {
                  if(this.sss.test(objectcheck[i]))
                  {
                    returncheck=1;
                  }else {
                    returncheck=2;
                    break;
                  }    
        }
      }else{
      returncheck=2;
      }
    return returncheck;
  }
  
  checkbutton(buttonc:boolean)
  {
    if(this.usernamec==1&&this.mahtc==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  checkusername(objectcheck:string,idHT:string) 
  {

    if(objectcheck!=idHT)
      {
      this.loginService.checksys(new HeThong(objectcheck,this.username,undefined),localStorage.getItem("token")).subscribe(data=>{
        if(data.length>0)
        {
          this.mahtc=2;
        }
      },error=>{
        console.log('oops', error); 
        this.router.navigateByUrl('/');
      });
    }
  }
  update(iduser:number)
  {
    this.loginService.getinforsys(new HeThong(this.idHT,this.username,undefined),localStorage.getItem("token")).subscribe(data3=>{
        this.HeThong=data3;
        console.log(data3);
        // console.log(this.userQT);
        this.maHT=this.HeThong[0].ma;
        this.username=this.HeThong[0].tenHT;
   
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
  }
  capnhat()
  {
      this.loginService.changesys(new HeThong(this.maHT,this.username,undefined),localStorage.getItem("token")).subscribe(data=>{
        if(data==1)
        {
          alert("Cập nhật tài khoản thành công");
          this.datas2.changeMessageSYS(!this.exittable);
          this.datas2.changeMessageSYSID(this.idHT="");
          this.maHT="";
          this.username="";
          this.sys.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
  }
}
