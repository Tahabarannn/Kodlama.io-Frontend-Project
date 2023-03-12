import { Component } from '@angular/core';
import { Product } from 'src/app/models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [];
}
