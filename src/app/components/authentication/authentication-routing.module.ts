import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from 'src/app/core/guards/guest.guard';

import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [{ path: '', component: AuthenticationComponent, canActivate : [GuestGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
