import { Component, OnInit, Input } from '@angular/core';
import { CategoryI, CartProductI } from 'src/app/data/interfaces';

@Component({
  selector: 'app-action-confirm',
  templateUrl: './action-confirm.component.html',
  styleUrls: ['./action-confirm.component.css'],
})
export class ActionConfirmComponent implements OnInit {
  @Input() msg!: string;
  @Input() type!: 'empty-cart' | 'order';
  @Input() disabledButton!: boolean;

  public modalOpened: boolean = false;

  constructor() {}

  openModal() {
    this.modalOpened = true;
  }

  closeModal() {
    this.modalOpened = false;
  }

  confirmAction(): void {
    if (this.type === 'empty-cart') {
      const categories = JSON.parse(localStorage.getItem('categories')!) as CategoryI[];
      const shopCart = JSON.parse(localStorage.getItem('shopping-cart')!) as CartProductI[];
      const updatedCategories = categories.map((cat) => {
        const updatedProducts = cat.products.map((prod) => {
          const updatedProd = shopCart.find((cartProd) => cartProd.id === prod.id);
          if (updatedProd) {
            return { ...prod, stock: prod.stock + updatedProd.quantity };
          } else {
            return prod;
          }
        });
        return { ...cat, products: updatedProducts };
      });

      localStorage.setItem('categories', JSON.stringify(updatedCategories));
    }
    localStorage.setItem('shopping-cart', JSON.stringify([]));
    window.dispatchEvent(new Event('storage'));
    this.closeModal();
  }

  ngOnInit(): void {}
}
