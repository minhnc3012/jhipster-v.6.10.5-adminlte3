import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'box-default',
      },
      {
        path: 'box-default',
        loadChildren: () => import('./box-default/box-default.module').then(m => m.BoxDefaultModule),
      },
    ]),
  ],
})
export class BoxsRoutingModule {}
