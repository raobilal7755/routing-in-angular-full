import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MycssComponent } from './mycss/mycss.component';
import { MyhtmlComponent } from './myhtml/myhtml.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AngularComponent } from './angular/angular.component';
import { WebDesigningComponent } from './web-designing/web-designing.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'product',
    component:ProductComponent
  },

  {
    path:'web-designing',
    children:[
      {path:'', component:WebDesigningComponent},
      {path:'html',component:MyhtmlComponent},
      {path:'css',component:MycssComponent},
      {path:'bootstrap',component:BootstrapComponent},
    ],
   
  },

  {
    path:'angular',
    component:AngularComponent
  },

  {
    path:'about-us',
    component:AboutUsComponent
  },

  {
    path:'contect-us',
    component:ContectUsComponent
  },

  {
    path:'**',
    component:PageNotFoundComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
