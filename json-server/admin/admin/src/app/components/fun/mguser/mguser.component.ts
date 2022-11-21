import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from "../../../Service/login.module";
import { UserQT } from "../../../Object/User";
import { Router } from "@angular/router";
import { Datatalbemu } from "../../../Service/api.service";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { AddUserComponent } from "../add/add-user/add-user.component";

@Component({
  selector: 'app-mguser',
  templateUrl: './mguser.component.html',
  styleUrls: ['./mguser.component.css']
})
export class MguserComponent implements OnInit {
  @ViewChild(AddUserComponent) child:any ;
  userQT:UserQT[]=[];
  faSort = faSort;
  faPlus=faPlus;
  faTrash=faTrash;
  faPencil=faPencil;
  sreach:any;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  iduser:number=0;
  constructor(private loginService:LoginService,private router:Router,private data2:Datatalbemu) { 
    this.data2.currentMessage.subscribe(message => this.exittable = message);
    this.data2.currentMessageID.subscribe(message => this.iduser = message);
  }
  ngOnInit(): void {
      this.loginService.getUser(localStorage.getItem("token")).subscribe(data=>{
            this.userQT=data;
            // let checkdata= data as unknown as {"_token":number};
            // if( checkdata._token==12)
            // {
            //   alert("phien đăng nhập của bạn hết hạn vùi lòng đăng nhập lại");
            //   localStorage.removeItem('token');
            //   localStorage.removeItem('User');
            //   this.router.navigate(['login']);
            // }
      },error=>{
        console.log('oops', error); 
        this.router.navigateByUrl('/');
      });
   }

  Search()
  {
      if(this.sreach=="")
      {
        this.ngOnInit();
      }else{
        this.userQT=this.userQT.filter(res=>{
          return res.tenQT.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
        })
      }
  }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

    checkAllCheckBox(ev: any) { 
      this.userQT.forEach(x => x.checked = ev.target.checked)
    }
    isAllCheckBoxChecked() {
      return this.userQT.every(p => p.checked);
    }
    AddUser(exittable:boolean)
    {
      this.data2.changeMessage(exittable);
    }
    openupdate(ad:any)
    {
      this.data2.changeMessage(!this.exittable);
      this.data2.changeMessageID(ad);
       this.child.update(ad);
      // this.adduser.update();
    }
    deleteuser()
    {
      try {
        let a=0;
        if(confirm("bạn có chắc có muốn xóa không"))
        {
        for (let i = 0; i < this.userQT.length; i++) {
          if(this.userQT[i].checked==true)
          {
            this.loginService.deleteuser(new UserQT(this.userQT[i].idQT,"","",undefined,0,"","",undefined,""),localStorage.getItem("token")).subscribe(data=>{
              if(data==1)
              {
               
                this.ngOnInit();
              }
        },error=>{
          console.log('oops', error); 
          this.router.navigateByUrl('/');
        });
          }
        }
        if(a>0)
        {alert("Xóa thành công");}
      }
      } catch (error) {
        alert(error);
      }
   
    }
}
