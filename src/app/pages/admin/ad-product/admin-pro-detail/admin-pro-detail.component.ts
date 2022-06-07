import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-pro-detail',
  templateUrl: './admin-pro-detail.component.html',
  styleUrls: ['./admin-pro-detail.component.css']
})
export class AdminProDetailComponent implements OnInit {
  _id: string;
  product: Product
  constructor(private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this._id = '';
    this.product = {
      _id: 0,
      name: ''
    };
  }
  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params['id']
    this.productService.getProduct(this._id).subscribe((data) => {
      this.product = data
    })
  }

}
