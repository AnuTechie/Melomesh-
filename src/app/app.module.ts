import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { MusicComponent } from './music/music.component';
import { DeleteComponent } from './delete/delete.component';
import { NodeUtilityService } from './node-utility.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { SongComponent } from './song/song.component';
import { VijayantonyComponent } from './vijayantony/vijayantony.component';
import { HarrisComponent } from './harris/harris.component';
import { ArrComponent } from './arr/arr.component';
import { MyhighlightDirective } from './myhighlight.directive';
import { MypipePipe } from './mypipe.pipe';
import { AdminComponent } from './admin/admin.component';
import { PremiumComponent } from './premium/premium.component';
import { BillingComponent } from './billing/billing.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    MusicComponent,
    DeleteComponent,
    LandingComponent,
    SignupComponent,
    SongComponent,
    VijayantonyComponent,
    HarrisComponent,
    ArrComponent,
    MyhighlightDirective,
    MypipePipe,
    AdminComponent,
    PremiumComponent,
    BillingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,CommonModule
  ],
  providers: [NodeUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
