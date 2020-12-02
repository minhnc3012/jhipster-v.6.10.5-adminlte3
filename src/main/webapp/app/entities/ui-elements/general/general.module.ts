import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { LayoutSectionModule } from '../../../core/layout/section/section.module';

@NgModule({
  imports: [CommonModule, GeneralRoutingModule, LayoutSectionModule],
  declarations: [GeneralComponent],
})
export class GeneralModule {}
