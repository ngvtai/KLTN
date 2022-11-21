
export class UserQT {
    idQT:any;
    tenQT:string;
    username:string;
    password:string|undefined;
    Hethong: HeThong|undefined;
    Vaitro:VaiTro|undefined;
    checked?: boolean;

    constructor(idQT: any ,tenQT: string ,username: string,password: string|undefined,idVT: number,ma:string,tenHT:string,checked: boolean|undefined,tenVT:string)
    {
        this.idQT=idQT;
        this.tenQT=tenQT;
        this.username=username;
        this.password=password;
        this.Hethong=new HeThong(ma,tenHT,undefined);
        this.checked=checked;
        this.Vaitro=new VaiTro(idVT,tenVT);
   
    }
  };
  export class VaiTro
  {
    idVT: number;
    tenVT:string;
    constructor(idVT: any,tenVT: any)
    {
        this.idVT=idVT;
        this.tenVT=tenVT;
    }
  }
  export class HeThong
  { 
        ma:string;
        tenHT:string;
        checked?:boolean;
        constructor(ma: string,tenHT: string,checked:boolean|undefined)
        {
            this.ma=ma;
            this.tenHT=tenHT;
            this.checked=checked;
        }
  }
  export class Login
  {
        username:string;
        password:string;
        constructor( username:string,password:string)
        {
            this.username=username;
            this.password=password;
        }
  }

