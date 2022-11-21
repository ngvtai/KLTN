import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/blocks/login/login.component';
import { HomeComponent } from './components/fun/home/home.component';
import { MenuComponent } from './components/blocks/menu/menu.component';
import { NavbarComponent } from './components/blocks/navbar/navbar.component';
import { ThongkeComponent } from './components/fun/thongke/thongke.component';
import { ChangepassComponent } from './components/fun/changepass/changepass.component';
import { DanhgiaComponent } from './components/fun/danhgia/danhgia.component';
import { SystemComponent } from './components/fun/system/system.component';
import { FuncComponent } from './components/fun/func/func.component';
import { MguserComponent } from './components/fun/mguser/mguser.component';
import { ErrorComponent } from './components/blocks/error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TableComponent } from './components/blocks/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddUserComponent } from './components/fun/add/add-user/add-user.component';
import { AddsysComponent } from './components/fun/add/addsys/addsys.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    ThongkeComponent,
    ChangepassComponent,
    DanhgiaComponent,
    SystemComponent,
    FuncComponent,
    MguserComponent,
    ErrorComponent,
    TableComponent,
    AddUserComponent,
    AddsysComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
