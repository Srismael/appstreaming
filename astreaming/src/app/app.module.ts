import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { UserComponent } from './view/user/user.component';
import { HomeComponent } from './view/home/home.component';
import { SignupComponent } from './view/signup/signup.component';
import { FooterComponent } from './view/complemets/footer/footer.component';
import { NavComponent } from './view/complemets/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    SignupComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
