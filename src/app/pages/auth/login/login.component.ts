import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      this.router.navigateByUrl('/admin/products')
    })

  }
}
