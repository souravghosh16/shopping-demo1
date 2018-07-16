import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//route module
import {AppRoutingModule} from './app-routing-module';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { Select2Module } from 'ng2-select2';
//import { SlickModule } from 'ngx-slick';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { MenuComponent } from './layout/header/menu/menu.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { UpperHeaderComponent } from './layout/header/upper-header/upper-header.component';
import { NewsLetterComponent } from './layout/footer/footer/news-letter/news-letter.component';
import { MiddileMenuComponent } from './layout/footer/footer/middile-menu/middile-menu.component';
import { GetInTouchComponent } from './layout/footer/footer/get-in-touch/get-in-touch.component';
import { FooterLayputComponent } from './layout/footer/layout/footer/footer-layput/footer-layput.component';
import { HeaderLayoutComponent } from './layout/footer/layout/header/header-layout/header-layout.component';

//third party component
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AnimatorModule } from 'css-animator';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './views/home/slider/slider.component';
import { NewProductComponent } from './views/home/new-product/new-product.component';
import { BannerComponent } from './views/home/banner/banner.component';
import { BlogComponent } from './views/blog/blog/blog.component';
import { InstagramComponent } from './views/home/instagram/instagram.component';
import { ShopComponent } from './views/shop/shop/shop.component';
import { HomeComponent } from './views/home/home/home.component';
import { SaleComponent } from './views/sale/sale/sale.component';
import { FeaturesComponent } from './views/features/features/features.component';
import { AboutComponent } from './views/about/about/about.component';
import { ContactComponent } from './views/contact/contact/contact.component';

//services
import { LoginRegistrationService } from './services/login-registration.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FullLayoutComponent,
    UpperHeaderComponent,
    NewsLetterComponent,
    MiddileMenuComponent,
    GetInTouchComponent,
    FooterLayputComponent,
    HeaderLayoutComponent,
    SliderComponent,
    NewProductComponent,
    BannerComponent,
    BlogComponent,
    InstagramComponent,
    ShopComponent,
    HomeComponent,
    SaleComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    AnimatorModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    Select2Module,
    LoadingBarRouterModule,
    LoadingBarHttpModule,
    //SlickModule.forRoot(),

  ],
  providers: [LoginRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
