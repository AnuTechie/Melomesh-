
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { MusicComponent } from './music/music.component';
import { DeleteComponent } from './delete/delete.component';
import { SongComponent } from './song/song.component';
import { VijayantonyComponent } from './vijayantony/vijayantony.component';
import { HarrisComponent } from './harris/harris.component';
import { ArrComponent } from './arr/arr.component';
import { AdminComponent } from './admin/admin.component';
import { PremiumComponent } from './premium/premium.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  {path:"",redirectTo:"landing",pathMatch:'full'},
  {path:"landing",component:LandingComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"forget",component:ForgetComponent},
  {path:"music",component:MusicComponent},
  {path:"delete",component:DeleteComponent},
  {path:"song",component:SongComponent},
  {path:"vijayantony",component:VijayantonyComponent},
  {path:"harris",component:HarrisComponent},
  {path:"arr",component:ArrComponent},
  {path:"admin",component:AdminComponent},
  {path:"premium",component:PremiumComponent},
  {path:"bill",component:BillingComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
