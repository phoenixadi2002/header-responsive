import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'',redirectTo:'HomeComponent',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'about',component:WorkComponent},
  {path:'work',component:ContactComponent},
  {path:'contact',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
