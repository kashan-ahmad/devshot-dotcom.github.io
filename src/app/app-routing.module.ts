import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerComponents } from 'src/meta';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const { web, mobile, ui_ux, blogs } = routerComponents;

const routes: Routes = [
  { path: web.path, component: web.component },
  { path: mobile.path, component: mobile.component },
  { path: ui_ux.path, component: ui_ux.component },
  { path: blogs.path, component: blogs.component },
  { path: '', component: LandingComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
