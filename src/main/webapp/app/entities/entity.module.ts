import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule),
      },
      {
        path: 'ui-elements',
        loadChildren: () => import('./ui-elements/ui-elements-routing.module').then(m => m.UIElementsRoutingModule),
      },
      {
        path: 'boxs',
        loadChildren: () => import('./boxs/boxs-routing.module').then(m => m.BoxsRoutingModule),
      },
    ]),
  ],
})
export class JhiAdminLte3EntityModule {}
