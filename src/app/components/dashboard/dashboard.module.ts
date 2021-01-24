import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';




import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';




import { SidebarComponent } from './common/sidebar/sidebar.component';



@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    DashboardRoutingModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports:[MatCardModule,MatInputModule,FlexLayoutModule],
  providers: []
})
export class DashboardModule { }
