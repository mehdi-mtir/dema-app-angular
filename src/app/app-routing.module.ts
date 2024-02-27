import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

const routes: Routes = [
  {path : "first", component : FirstComponent},
  {path : "third", component : ThirdComponent},
  {path : "fourth", component : FourthComponent},
  {path : "", redirectTo : "first", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
