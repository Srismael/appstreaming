import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { UserComponent } from './view/user/user.component';
import { HomeComponent } from './view/home/home.component';
import { SignupComponent } from './view/signup/signup.component';
import { MiComponent } from './view/mi/mi.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes =[
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sigup', component: SignupComponent},
  {path: 'user', component: UserComponent},
  {path: 'mi', component: MiComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    SignupComponent,
    MiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


