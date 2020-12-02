import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhiAdminLte3SharedModule } from 'app/shared/shared.module';
import { JhiAdminLte3CoreModule } from 'app/core/core.module';
import { JhiAdminLte3AppRoutingModule } from './app-routing.module';
import { JhiAdminLte3HomeModule } from './home/home.module';
import { JhiAdminLte3EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { LayoutModule } from './core/admin-lte3/layout/layout.module';
import { layoutConfig } from './config/layout.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    LayoutModule,
    LayoutModule.forRoot(layoutConfig),
    JhiAdminLte3SharedModule,
    JhiAdminLte3CoreModule,
    JhiAdminLte3HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhiAdminLte3EntityModule,
    JhiAdminLte3AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhiAdminLte3AppModule {}
