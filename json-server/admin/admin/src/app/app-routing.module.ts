import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/fun/home/home.component';
import { LoginComponent } from './components/blocks/login/login.component';
import { ChangepassComponent } from './components/fun/changepass/changepass.component';
import {  DanhgiaComponent} from "./components/fun/danhgia/danhgia.component";
import {  FuncComponent} from "./components/fun/func/func.component";
import {SystemComponent  } from "./components/fun/system/system.component";
import {  ThongkeComponent} from "./components/fun/thongke/thongke.component";
import {MguserComponent} from "./components/fun/mguser/mguser.component";
import { ErrorComponent } from "./components/blocks/error/error.component";

const routes: Routes = [
  {path:  '' ,component: HomeComponent},
  {path:  'login', component: LoginComponent},
  {path:  'function/changepassword',component: ChangepassComponent},
  {path:  'function/xemdanhgia',component: DanhgiaComponent},
  {path:  'function/quanlychucnang',component: FuncComponent},
  {path:  'function/quanlyhethong',component: SystemComponent},
  {path:  'function/xemthongke',component: ThongkeComponent},
  {path:  'function/quanlynguoidung',component: MguserComponent},
    {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
