import { Component, OnInit } from '@angular/core';
import { defaultCats } from 'src/app/data/data';
import { CategoryI } from 'src/app/data/interfaces';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  categories: CategoryI[] = [];

  constructor() {}

  ngOnInit(): void {
    this.categories =
      JSON.parse(localStorage.getItem('categories')!) || defaultCats;
    window.addEventListener('storage', this.handleStorageChange);
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.handleStorageChange);
  }

  handleStorageChange = () => {
    const categoriesLS = localStorage.getItem('categories');
    if (categoriesLS) {
      this.categories = JSON.parse(categoriesLS);
    } else {
      this.categories = defaultCats;
    }
  };
}
