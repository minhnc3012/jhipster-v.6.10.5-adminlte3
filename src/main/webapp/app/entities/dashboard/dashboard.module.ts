import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutSectionModule } from '../../core/admin-lte3/layout/section/section.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, LayoutSectionModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
