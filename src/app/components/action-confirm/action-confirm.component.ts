import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @Output() onCheckout = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  checkout(): void {
    this.onCheckout.emit();
  }

  confirmAction(): void {
    this.checkout();
    if (this.type === 'empty-cart') {
      const categories = JSON.parse(
        localStorage.getItem('categories')!
      ) as CategoryI[];
      const shopCart = JSON.parse(
        localStorage.getItem('shopping-cart')!
      ) as CartProductI[];
      const updatedCategories = categories.map((cat) => {
        const updatedProducts = cat.products.map((prod) => {
          const updatedProd = shopCart.find(
            (cartProd) => cartProd.id === prod.id
          );
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
    this.modalService.dismissAll();
  }

  ngOnInit(): void {}
}
