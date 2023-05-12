import { Component, OnInit } from '@angular/core';
import { CartProductI } from 'src/app/data/interfaces';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: CartProductI[] = [];
  orderPlaced = false;

  constructor() {}

  ngOnInit(): void {
    this.shoppingCart =
      JSON.parse(localStorage.getItem('shopping-cart')!) || [];
    window.addEventListener('storage', this.handleStorageChange);
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.handleStorageChange);
  }

  handleStorageChange = () => {
    this.shoppingCart =
      JSON.parse(localStorage.getItem('shopping-cart')!) || [];
  };

  getTotal(): string {
    return this.shoppingCart
      .reduce((acc, product) => acc + product.amount, 0)
      .toFixed(2);
  }

  checkout() {
    this.orderPlaced = true;
    setTimeout(() => {
      this.orderPlaced = false;
    }, 3000);
  }
}
