import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'auth', loadComponent: () => import('./auth/auth.component').then(mod => mod.AuthComponent)},
    {path: 'auth' ,    loadChildren:  () => import('./auth/auth.routes').then(mod => mod.AUTH_ROUTES)},
    {path: 'checkout', loadComponent: () => import('./checkout/checkout.component').then(mod => mod.CheckoutComponent)},
    {path:'' , redirectTo:'products' , pathMatch:'full'},
    {path: 'products', loadComponent: () => import('./products/products.component').then(mod => mod.ProductsComponent)},
    {path: 'products/:id', loadComponent: () => import('./products/product-detail/product-detail.component').then(mod => mod.ProductDetailComponent)}
];

