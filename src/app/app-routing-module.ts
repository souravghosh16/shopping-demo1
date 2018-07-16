import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { HomeComponent } from './views/home/home/home.component';
import { ShopComponent } from './views/shop/shop/shop.component';
import { FeaturesComponent } from './views/features/features/features.component';
import { AboutComponent } from './views/about/about/about.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { SaleComponent } from './views/sale/sale/sale.component';
import { BlogComponent } from './views/blog/blog/blog.component';
const routes: Routes = [
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {path: '', redirectTo:'home',pathMatch:'full'}, 
            {path: 'shop', component: ShopComponent}, 
            {path: 'features', component: FeaturesComponent},
            {path: 'contact', component: ContactComponent},  
            {path: 'about', component: AboutComponent},  
            {path: 'sale', component: SaleComponent},  
            {path: 'blog', component: BlogComponent},  
            {path: 'home', component:HomeComponent},
          ]
    },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' canActivate: [AuthGuard]},
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
