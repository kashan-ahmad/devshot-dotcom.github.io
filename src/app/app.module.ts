import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CatWebComponent } from './cat-web/cat-web.component';
import { CatMobileComponent } from './cat-mobile/cat-mobile.component';
import { CatUiUxComponent } from './cat-ui-ux/cat-ui-ux.component';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, HeaderComponent, FooterComponent, ProductComponent, CatWebComponent, CatMobileComponent, CatUiUxComponent, LandingComponent, BlogsComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
