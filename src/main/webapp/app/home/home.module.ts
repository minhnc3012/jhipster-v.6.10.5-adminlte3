import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhiAdminLte3SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { LayoutSectionModule } from '../core/admin-lte3/layout/section/section.module';

@NgModule({
  imports: [JhiAdminLte3SharedModule, LayoutSectionModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhiAdminLte3HomeModule {}
