import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WebDesigningComponent } from './web-designing/web-designing.component';
import { AngularComponent } from './angular/angular.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyhtmlComponent } from './myhtml/myhtml.component';
import { MycssComponent } from './mycss/mycss.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    WebDesigningComponent,
    AngularComponent,
    AboutUsComponent,
    ContectUsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MyhtmlComponent,
    MycssComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
