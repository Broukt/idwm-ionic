import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

/**
 * Represents the TabsComponent.
 * This component is responsible for managing the tabs in the application.
 */
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  /**
   * Creates an instance of TabsComponent.
   * @param authService - The authentication service.
   * @param router - The router service.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Initializes the component.
   */
  ngOnInit() {}

  /**
   * Handles the press event.
   * Calls the logout method.
   */
  onPress(): void {
    this.logout();
  }

  /**
   * Logs out the user.
   * Calls the logout method of the authentication service.
   * Navigates to the home page.
   */
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
