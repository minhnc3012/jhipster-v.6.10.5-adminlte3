import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxDefaultRoutingModule } from './box-default-routing.module';
import { BoxDefaultComponent } from './box-default.component';
import { BoxModule } from '../../../core/admin-lte3/box/box.module';
import { LayoutSectionModule } from 'app/core/admin-lte3/layout/section/section.module';
import { JhiAdminLte3SharedLibsModule } from 'app/shared/shared-libs.module';

@NgModule({
  imports: [JhiAdminLte3SharedLibsModule, BoxDefaultRoutingModule],
  declarations: [BoxDefaultComponent],
})
export class BoxDefaultModule {}
