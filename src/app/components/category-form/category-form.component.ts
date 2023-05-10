import { Component, OnInit } from '@angular/core';
import { defaultCats } from 'src/app/data/data';
import { CategoryI } from 'src/app/data/interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  public modalOpened: boolean = false;
  public categoryName: string = '';

  openModal() {
    this.modalOpened = true;
  }

  closeModal() {
    this.modalOpened = false;
    this.categoryName = '';
  }

  submitForm() {
    const categories = localStorage.getItem('categories')
      ? JSON.parse(localStorage.getItem('categories')!)
      : (defaultCats as CategoryI[]);
    const newCategories = [
      ...categories,
      { id: uuidv4(), name: this.categoryName, products: [] },
    ];
    localStorage.setItem('categories', JSON.stringify(newCategories));
    window.dispatchEvent(new Event('storage'));
    this.closeModal();
  }

  constructor() {}

  ngOnInit(): void {}
}
