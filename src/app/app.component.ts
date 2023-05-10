import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  breakpoint: number = 2;
  constructor() {}
  ngOnInit(): void {
    document.title = 'Sitio de Compra Online';
    this.breakpoint = window.innerWidth <= 992 ? 1 : 2;
  }

  onResize(event: UIEvent) {
    this.breakpoint = (event.target as Window).innerWidth <= 992 ? 1 : 2;
  }
}
