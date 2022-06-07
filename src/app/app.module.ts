import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateComponent } from './components/validate/validate.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProDetailComponent } from './pages/admin/ad-product/admin-pro-detail/admin-pro-detail.component';
import { AdminProFormComponent } from './pages/admin/ad-product/admin-pro-form/admin-pro-form.component';
import { AdminProListComponent } from './pages/admin/ad-product/admin-pro-list/admin-pro-list.component';
import { LoginComponent } from './pages/auth/login/login.component';

import { HttpClientModule } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { ProductClientComponent } from './pages/client/product-client/product-client.component';
import { AboutClientComponent } from './pages/client/about-client/about-client.component';
import { ProDetailComponent } from './pages/client/product-client/pro-detail/pro-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ValidateComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProDetailComponent,
    AdminProFormComponent,
    AdminProListComponent,
    LoginComponent,
    HomeClientComponent,
    ProductClientComponent,
    AboutClientComponent,
    ProDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
