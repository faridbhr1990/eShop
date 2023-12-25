import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../products.service';



@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductsService],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit{
  productsArray: any[] = [] ;

  constructor(private productsService : ProductsService){}
  ngOnInit(){
    this.getAllProducts();
  }
  getAllProducts(){
    this.productsService.getAllProducts().subscribe((Res:any)=>{
      this.productsArray = Res.data;
    })
  };

}
