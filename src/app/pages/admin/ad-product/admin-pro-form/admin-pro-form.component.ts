import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-admin-pro-form',
  templateUrl: './admin-pro-form.component.html',
  styleUrls: ['./admin-pro-form.component.css']
})
export class AdminProFormComponent implements OnInit {
  proForm: FormGroup;
  proId: string;

  constructor(
    private productService: ProductService, // cung cấp createProduct
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute // lấy ra các tham số trong url
  ) {
    this.proForm = new FormGroup({
      // name: new FormControl('', Validators.required),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct // tên custom validate
      ]),
      // price: new FormControl(0),
    });

    this.proId = '0';
  }

  ngOnInit(): void {
    this.proId = this.activateRoute.snapshot.params['id'];
    if (this.proId) {
      this.productService.getProduct(this.proId).subscribe(data => {
        // Gán giá trị cho form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.proForm.patchValue({
          name: data.name
        });
      });
    }
  }

  // Mỗi khi FormControl name được thay đổi thì sẽ gọi vào đây
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    // 1. Lấy ra value của FormControl name hiện tại
    const {value} = control; // value = control.value;
    // 2. Kiểm tra theo điều kiện chứa từ khoá 'product'
    if (!value.includes('product')) {
      return {hasProductError: true};
    }
    // 3. trả về kq nếu không lỗi
    return null;
  }

  onSubmit() {
    // 1. Lấy dữ liệu từ form
    const submitData = this.proForm.value;

    if (this.proId !== '0' || this.proId !== undefined) {
      return this.productService.updateProduct(this.proId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.productService.createProduct(submitData).subscribe((data) => {
      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'products']);
      this.router.navigateByUrl('/admin/products');
    })

  }
}
