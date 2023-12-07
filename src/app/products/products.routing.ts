import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '',component: ProductsComponent , 
   children:[
    {path: ':id' , component:ProductDetailComponent},
            ]
  }
];

export const ProductsRoutingModule = RouterModule.forChild(routes);