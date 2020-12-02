import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { LayoutSectionModule } from '../../../core/admin-lte3/layout/section/section.module';

@NgModule({
  imports: [CommonModule, ButtonsRoutingModule, LayoutSectionModule],
  declarations: [ButtonsComponent],
})
export class ButtonsModule {}
