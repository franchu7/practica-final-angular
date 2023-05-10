import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductComponent } from './components/product/product.component';
import { ActionConfirmComponent } from './components/action-confirm/action-confirm.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';

@NgModule({
  declarations: [AppComponent, CategoriesListComponent,
    ShoppingCartComponent,
    CategoryFormComponent,
    CategoryComponent,
    ProductFormComponent,
    ProductComponent,
    ActionConfirmComponent,
    CartProductComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
