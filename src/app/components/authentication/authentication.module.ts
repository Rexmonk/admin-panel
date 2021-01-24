import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
