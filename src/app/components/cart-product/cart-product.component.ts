import { Component, OnInit, Input } from '@angular/core';
import { defaultCats } from 'src/app/data/data';
import { CartProductI, CategoryI } from 'src/app/data/interfaces';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() product!: CartProductI;
  constructor() {}

  ngOnInit(): void {}

  removeProductFromCart(): void {
    const shoppingCart = (
      localStorage.getItem('shopping-cart')
        ? JSON.parse(localStorage.getItem('shopping-cart')!)
        : []
    ) as CartProductI[];
    const categories = (
      localStorage.getItem('categories')
        ? JSON.parse(localStorage.getItem('categories')!)
        : defaultCats
    ) as CategoryI[];

    const updatedCategories = categories.map((category) => {
      category.products.map((p) => {
        if (p.id === this.product.id) {
          p.stock += 1;
        }
        return p;
      });
      return category;
    });

    const updatedCart = shoppingCart
      .map((p) => {
        if (p.id === this.product.id) {
          p.quantity -= 1;
          const price = this.product.amount / this.product.quantity;
          p.amount -= price;
        }
        return p;
      })
      .filter((p) => p.quantity > 0);

    localStorage.setItem('shopping-cart', JSON.stringify(updatedCart));
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    window.dispatchEvent(new Event('storage'));
  }
}
