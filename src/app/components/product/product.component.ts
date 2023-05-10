import { Component, Input, OnInit } from '@angular/core';
import { defaultCats } from 'src/app/data/data';
import { CartProductI, CategoryI, ProductI } from 'src/app/data/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductI;
  @Input() index!: number;
  public hoveredImg: boolean = false;

  handleMouseEnter(): void {
    if (window.innerWidth >= 768) this.hoveredImg = true;
  }

  handleMouseLeave(): void {
    if (window.innerWidth >= 768) this.hoveredImg = false;
  }

  addProductToCart(): void {
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
      category.products.map((product) => {
        if (this.product.id === product.id) {
          product.stock -= 1;
        }
        return product;
      });
      return category;
    });

    let updatedCart: CartProductI[] = [];
    if (!shoppingCart.find((product) => this.product.id === product.id)) {
      updatedCart = [
        ...shoppingCart,
        { ...this.product, quantity: 1, amount: this.product.price },
      ];
    } else {
      updatedCart = shoppingCart.map((product) => {
        if (this.product.id === product.id) {
          product.quantity += 1;
          product.amount = product.quantity * this.product.price;
        }
        return product;
      });
    }
    localStorage.setItem('shopping-cart', JSON.stringify(updatedCart));
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    window.dispatchEvent(new Event('storage'));
  }

  constructor() {}

  ngOnInit(): void {}
}
