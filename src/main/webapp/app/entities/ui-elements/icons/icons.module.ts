import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import { LayoutSectionModule } from '../../../core/admin-lte3/layout/section/section.module';

@NgModule({
  imports: [CommonModule, IconsRoutingModule, LayoutSectionModule],
  declarations: [IconsComponent],
})
export class IconsModule {}
