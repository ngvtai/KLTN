import { Component, OnInit, ViewChild } from '@angular/core';
import { Datatalbemu } from "../../../Service/api.service";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from "../../../Service/login.module";
import { HeThong } from "../../../Object/User";
import { AddsysComponent } from "../add/addsys/addsys.component";
import { Router } from "@angular/router";
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @ViewChild(AddsysComponent) child:any ;
  Hethong:HeThong[]=[];
  faSort = faSort;
  faPlus=faPlus;
  faTrash=faTrash;
  faPencil=faPencil;
  sreach:any;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  idHT:string="";
  constructor(private loginService:LoginService,private router:Router,private data2:Datatalbemu) { 
    this.data2.currentMessageSYS.subscribe(message => this.exittable = message);
    this.data2.currentMessageSYSID.subscribe(message => this.idHT = message);
  }

  ngOnInit(): void {
    this.loginService.getHeThong(localStorage.getItem("token")).subscribe(data=>{
      this.Hethong=data;
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
        this.Hethong=this.Hethong.filter(res=>{
          return res.tenHT.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
        })
      }
  }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

    checkAllCheckBox(ev: any) { 
      this.Hethong.forEach(x => x.checked = ev.target.checked)
    }
    isAllCheckBoxChecked() {
      return this.Hethong.every(p => p.checked);
    }
    Addsys(exittable:boolean)
    {
      console.log(exittable);
      this.data2.changeMessageSYS(exittable);
      
    }
    openupdate(ad:any)
    {
      this.data2.changeMessageSYS(!this.exittable);
      this.data2.changeMessageSYSID(ad);
       this.child.update(ad);
      // this.adduser.update();
    }
    deletesys()
    {
      try {
        let a=0;
        if(confirm("bạn có chắc muốn xóa không"))
        {
                for (let i = 0; i < this.Hethong.length; i++) {
          if(this.Hethong[i].checked==true)
          {
            this.loginService.deletesys(new HeThong(this.Hethong[i].ma,"",undefined),localStorage.getItem("token")).subscribe(data=>{
              if(data==1)
              {
                a++;
                this.ngOnInit();
              }
        },error=>{
          console.log('oops', error); 
          this.router.navigateByUrl('/');
        });
          }
        }if(a>0)
        {
          alert("Xóa thành công");
        }}
      } catch (error) {
        alert(error);
      }
   
    }

}
