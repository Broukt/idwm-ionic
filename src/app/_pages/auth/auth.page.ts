import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ReceiptService } from 'src/app/_services/receipt.service';

/**
 * Represents the authentication page of the application.
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  /**
   * Represents the login form.
   */
  loginForm: FormGroup = new FormGroup({});

  /**
   * Represents the error message.
   */
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  /**
   * Initializes the component.
   */
  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initializes the login form.
   */
  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  /**
   * Performs the login operation.
   */
  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/receipt');
      },
      error: (result) => {
        // If the result is an HTTP error response
        if (result.status) {
          this.errorMessage = result.error;
        } else if (typeof result.message === 'string') {
          // If the result is an error from the service
          this.errorMessage = result.message;
        }
      },
    });
  }
}
