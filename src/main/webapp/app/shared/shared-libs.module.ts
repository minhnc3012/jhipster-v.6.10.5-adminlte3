import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutSectionModule } from 'app/core/admin-lte3/layout/section/section.module';
// import { ColorModule } from 'app/core/admin-lte3/color/color.module';
// import { AnimationsModule } from 'app/core/admin-lte3/animations/animations.module';
import { BoxModule } from 'app/core/admin-lte3/box/box.module';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    // ColorModule,
    // AnimationsModule,
    BoxModule,
    LayoutSectionModule,
    NgJhipsterModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class JhiAdminLte3SharedLibsModule {}
