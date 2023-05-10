import { Component, OnInit, Input } from '@angular/core';
import { CategoryI } from 'src/app/data/interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category!: CategoryI;
  @Input() index!: number;
  
  constructor() {}

  ngOnInit(): void {}
}
