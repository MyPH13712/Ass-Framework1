import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './pages/client/about-client/about-client.component';
import { CanAccessAdminGuard } from './guards/can-access-asmin.guard';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProDetailComponent } from './pages/admin/ad-product/admin-pro-detail/admin-pro-detail.component';
import { AdminProFormComponent } from './pages/admin/ad-product/admin-pro-form/admin-pro-form.component';
import { AdminProListComponent } from './pages/admin/ad-product/admin-pro-list/admin-pro-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductClientComponent } from './pages/client/product-client/product-client.component';
import { ProDetailComponent } from './pages/client/product-client/pro-detail/pro-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeClientComponent,
      },
      {
        path: 'products',
        component: ProductClientComponent,
      },
      {
        path: 'about',
        component: AboutClientComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProListComponent
          },
          {
            path: 'create',
            component: AdminProFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProFormComponent
          },
          {
            path: ':id',
            component: AdminProDetailComponent
          },
        ]
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
