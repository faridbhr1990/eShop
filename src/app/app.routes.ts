import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'login' , loadComponent: () => import('./auth/login/login.component').then(mod => mod.LoginComponent)},
    {path: 'register' , loadComponent: () => import('./auth/register/register.component').then(mod => mod.RegisterComponent)},
    {path: 'checkout', loadComponent: () => import('./checkout/checkout.component').then(mod => mod.CheckoutComponent)},
    {path:'' , redirectTo:'products' , pathMatch:'full'},
    {path: 'products', loadComponent: () => import('./products/products.component').then(mod => mod.ProductsComponent)},
    {path: 'products/:id', loadComponent: () => import('./products/product-detail/product-detail.component').then(mod => mod.ProductDetailComponent)}
];