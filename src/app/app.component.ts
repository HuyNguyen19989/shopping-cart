import { Component } from '@angular/core';
import { Product } from '../app/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products: Product[] = [
    {
      id: '1',
      name: "PRODUCT ITEM NUMBER 1",
      description: "Description for product item number 1",
      price: 146,
      quantity: 2,
      image: "https://via.placeholder.com/200x150",
    },
    {
      id: '2',
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 2",
      price: 16,
      quantity: 22,
      image: "https://via.placeholder.com/200x150",
    },
  ]

  numberItems: number = 0

  subTotal: number = 0

  removeProduct(productId: string) {
    const index = this.products.findIndex(product => product.id === productId)

    if (index !== -1) {
      this.products.splice(index, 1)
    }
  }
  changeQuantity(data: {id: string; quantity: string}) {
    let product = this.products.find(product => product.id === data.id)
    if (product) {
      product.quantity = parseInt(data.quantity) || 0
    }

  }
}
