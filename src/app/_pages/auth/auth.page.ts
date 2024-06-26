import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ReceiptService } from 'src/app/_services/receipt.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private receiptService: ReceiptService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    console.log('los valores del formulario son:');
    console.log(this.loginForm.value);
    console.log('el formulario es valido?');
    console.log(this.loginForm.valid);
    console.log('los errores del formulario son:');
    console.log(this.loginForm.errors);
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/receipt');
      },
      error: (result) => {
        console.log(result);
        console.log(typeof result);
        console.log(result.error);
        console.log(typeof result.error);
        console.log(result.message);
        console.log(typeof result.message);

        //Si el result es una http error response
        if (result.status) {
          this.errorMessage = result.error;
        } else if (typeof result.message === 'string') {
          //Si el result es un error del service
          this.errorMessage = result.message;
        }
      },
    });
  }

  isAdmin(token: string): boolean {
    return token === 'admin';
  }
}
