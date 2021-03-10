import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products!: Product[];
  @Output() onRemoveProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  removeProduct(productId: string): void {
    this.onRemoveProduct.emit(productId)
    
  }

}
