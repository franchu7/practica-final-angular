import { Component, Input, OnInit } from '@angular/core';
import { defaultCats } from 'src/app/data/data';
import { CategoryI } from 'src/app/data/interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Input() category!: CategoryI;
  public modalOpened: boolean = false;
  public image: File = new File([], '');
  public srcImage: string = 'assets/images/defaultCover.jpg';
  public previewImg: string = '';
  public product = {
    code: '',
    title: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  };

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modalOpened = true;
  }

  closeModal() {
    this.modalOpened = false;
    this.product = {
      code: '',
      title: '',
      description: '',
      price: '',
      stock: '',
      image: '',
    };
    this.image = new File([], '');
    this.srcImage = 'assets/images/defaultCover.jpg';
    this.previewImg = '';
  }

  onDrop(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    this.image = input.files[0];

    const imageUrl = URL.createObjectURL(this.image);
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target!.result as string;
      this.srcImage = src;
    };
    reader.readAsDataURL(this.image);
    this.previewImg = imageUrl;
  }

  submitForm() {
    const newProduct = {
      id: uuidv4(),
      ...this.product,
      stock: parseInt(this.product.stock),
      price: parseFloat(this.product.price),
      image: this.srcImage,
    };
    const categories = (
      localStorage.getItem('categories')
        ? JSON.parse(localStorage.getItem('categories')!)
        : defaultCats
    ) as CategoryI[];
    const updatedCategories = categories.map((cat) => {
      if (cat.id === this.category.id) {
        return {
          ...cat,
          products: [...cat.products, newProduct],
        };
      }
      return cat;
    });
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    window.dispatchEvent(new Event('storage'));
    this.closeModal();
  }
}
