import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { LayoutSectionModule } from '../../core/layout/section/section.module';

@NgModule({
  imports: [CommonModule, LayoutSectionModule, WidgetsRoutingModule],
  declarations: [WidgetsComponent],
})
export class WidgetsModule {}
