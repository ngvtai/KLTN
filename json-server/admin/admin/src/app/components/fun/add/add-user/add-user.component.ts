import { Component, Input, OnInit, Output } from '@angular/core';
import { faTimesCircle,faCheck  } from '@fortawesome/free-solid-svg-icons';
import {UserQT,VaiTro,HeThong} from "../../../../Object/User";
import { Router  } from "@angular/router";
import {  Datatalbemu } from "../../../../Service/api.service";
import { LoginService } from "../../../../Service/login.module";
import { MguserComponent } from "../../mguser/mguser.component";
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit { 
  countryForm!: FormGroup;
  //truyen bien mo the 
  userQT:UserQT[]=[];
  // @Output()@Input() exittable: boolean |undefined;
  exittable:boolean=false;
  //khai bao bien 
  passwordagain:string; username:string; hethong:any; vaitro:any; name:string; password:string;
  //khai bao icon
  faTimesCircle=faTimesCircle;  faCheck=faCheck;
  //khai bao bien kiem tra 
  iduser:number=0;

  usernamec:number;namec:number;passwordc:number;passwordagainc:number;hethongc:number;vaitroc:number;buttonc:boolean;
  // khoi tao mang vai tro va he thong
  Vaitro:VaiTro[]=[];
  HeThong:HeThong[]=[];
  //bien kiem tra ky tu dat biet 
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;

  constructor(private loginService:LoginService,private router:Router, private datas2: Datatalbemu,private mgu:MguserComponent) { 
    this.datas2.currentMessage.subscribe(message => this.exittable = message);
    this.datas2.currentMessageID.subscribe(message => this.iduser = message);
    
    //khai bao constructor
    this.usernamec=0; this.namec=0; this.passwordc=0; this.passwordagainc=0;  this.hethongc=0;
    this.vaitroc=0; this.buttonc=true;
    this.passwordagain="";  this.username=""; this.hethong="";  this.vaitro=""; this.name=""; this.password="";
    //lay vai tro nguoi dung
    this.loginService.getVaiTro(localStorage.getItem("token")).subscribe(data=>{
        this.Vaitro=data;
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
    //lay ten he thong
    this.loginService.getHeThong(localStorage.getItem("token")).subscribe(data=>{
      this.HeThong=data;
    },error=>{
    console.log('oops', error); 
    this.router.navigateByUrl('/');
    });
  }
  ngOnInit(): void {
  }
  outtable()
  {
    this.passwordagain="";  this.username=""; this.hethong="";  this.vaitro=""; this.name=""; this.password="";
    this.datas2.changeMessageID(this.iduser=0);
    this.datas2.changeMessage(!this.exittable);
  }
  dangky()
  {
      let vt=this.vaitro as {idVT:number,tenVT:string};
      let ht=this.hethong as {ma:string,tenHT:string};
      console.log(new UserQT(1,this.name,this.username,this.password,vt.idVT,ht.ma,ht.tenHT,undefined,vt.tenVT));
      this.loginService.insertUser(new UserQT(1,this.name,this.username,this.password,vt.idVT,ht.ma,ht.tenHT,undefined,vt.tenVT),localStorage.getItem("token")).subscribe(data=>{
        if(data==1)
        {
          alert("Thêm tài khoản thành công");
          this.datas2.changeMessage(!this.exittable);
          this.name="";
          this.username="";
          this.password="";
          this.vaitro="";
          this.hethong="";
          this.passwordagain="";
          this.mgu.ngOnInit();
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
      if(objectcheck.length>5)
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
    }else{
      returncheck=2;
    }
    return returncheck;
  }
  checkcombox(objectcheck:string|number,returncheck:number)
    {
      if(objectcheck!=null)
      {
        returncheck=1;
      }else{
        returncheck=2;
      }
      return returncheck;
    }
  checkpassagain(objectcheck:string,returncheck:number,returnpass:string)
    {
      if(objectcheck==returnpass)
      {
        returncheck=1;
      }else{
        returncheck=2;
      }
      return returncheck;
    }
  checkbutton(buttonc:boolean)
  {
    if(this.usernamec==1&&this.namec==1&&this.passwordc==1&&this.passwordagainc==1&&this.hethongc==1&&this.vaitroc==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  checkusername(objectcheck:string)
  {
    
    this.loginService.checkusername(new UserQT(1,"",objectcheck,"",1,"","",true,""),localStorage.getItem("token")).subscribe(data=>{
       if(data.length>0)
       {
         this.usernamec=2;
       }
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
  }
  update(iduser:number)
  {
    this.loginService.getinforuser(new UserQT(this.iduser,"","","",0,"","",undefined,""),localStorage.getItem("token")).subscribe(data3=>{
        this.userQT=data3;
        console.log(data3);
        // console.log(this.userQT);
        this.name=this.userQT[0].tenQT;
        this.vaitro=this.userQT[0].Vaitro;
        this.hethong=this.userQT[0].Hethong;
        this.username=this.userQT[0].username;
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
  }
  capnhat()
  {
      let vt=this.vaitro as {idVT:number,tenVT:string};
      let ht=this.hethong as {ma:string,tenHT:string};
      this.loginService.changeuser(new UserQT(this.iduser,this.name,this.username,undefined,vt.idVT,ht.ma,ht.tenHT,undefined,vt.tenVT),localStorage.getItem("token")).subscribe(data=>{
        if(data==1)
        {
          alert("Cập nhật tài khoản thành công");
          this.datas2.changeMessage(!this.exittable);
          this.datas2.changeMessageID(this.iduser=0);
          this.name="";
          this.username="";
          this.password="";
          this.vaitro="";
          this.hethong="";
          this.passwordagain="";
          this.mgu.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
  }
  resetpass()
  {
      this.loginService.changepassword(new UserQT(this.iduser,this.name,this.username,this.username,0,"","",undefined,""),localStorage.getItem("token")).subscribe(data=>{
        if(data==1)
        {
          alert("Thay đổi mật khẩu thành công");
          this.mgu.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigateByUrl('/');
    });
  }
}

