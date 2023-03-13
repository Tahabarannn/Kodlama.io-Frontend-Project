import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/IProduct';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/IProductResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  apiUrl = "https://localhost:7002/api/products/getall";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.data
    });
  }
}
