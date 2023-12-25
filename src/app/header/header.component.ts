import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  
  constructor(private router:Router ,
              private route :ActivatedRoute,
    ){}
  
  gotoLogin(){
    this.router.navigate(['/login']);
  }

  gotoProducts(){
    this.router.navigate(['/products']);
  }

  gotoRegister(){
    this.router.navigate(['/register']);
  }

  gotoCheckout(){
    this.router.navigate(['/checkout']);
  }
}
