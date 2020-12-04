import { NgModule } from '@angular/core';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { JhiAdminLte3SharedLibsModule } from 'app/shared/shared-libs.module';

@NgModule({
  imports: [JhiAdminLte3SharedLibsModule, WidgetsRoutingModule],
  declarations: [WidgetsComponent],
})
export class WidgetsModule {}
