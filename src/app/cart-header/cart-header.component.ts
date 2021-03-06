import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  @Input() numberItems!: number;
  title = 'Shopping Cart'

  constructor() { }

  ngOnInit(): void {
  }

}
