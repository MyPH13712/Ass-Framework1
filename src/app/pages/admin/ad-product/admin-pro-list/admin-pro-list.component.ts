import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';


@Component({
  selector: 'app-admin-pro-list',
  templateUrl: './admin-pro-list.component.html',
  styleUrls: ['./admin-pro-list.component.css']
})
export class AdminProListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = []
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  onDelete(_id: number) {
    const confirmDel = confirm('Do you want to delete ?');
    if (confirmDel && _id) {
      this.productService.deleteProduct(_id).subscribe((data) => {
        console.log(data);
        this.onGetList()
      })
    }
  }

}
