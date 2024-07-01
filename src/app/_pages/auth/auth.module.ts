import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from 'src/app/_components/text-input/text-input.component';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

/**
 * The AuthPageModule is responsible for importing the necessary modules and declaring the components
 * required for the authentication page.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AuthPage, TextInputComponent],
})
export class AuthPageModule {}
