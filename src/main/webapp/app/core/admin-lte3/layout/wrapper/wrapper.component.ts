import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../../helpers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jhi-layout-wrapper',
  templateUrl: './wrapper.component.html',
})
export class LayoutWrapperComponent implements OnInit, OnDestroy {
  private subscriptions?: Array<Subscription> = [];
  private layoutType?: string;
  private currentClasses: Array<string> = [];
  private currentAccentClass?: string;

  constructor(private renderer: Renderer2, private layoutStore: LayoutStore) {}

  ngOnInit(): void {
    window.console.log(this.layoutStore);
    this.subscriptions?.push(
      this.layoutStore?.type?.subscribe(layoutType => {
        if (this.layoutType !== layoutType) {
          this.applyBodyClasses(layoutType);
        }
      })
    );

    this.subscriptions?.push(
      this.layoutStore?.layoutOptions.subscribe(layoutOptions => {
        if (!layoutOptions.sidebarMenuOpened) {
          this.renderer.removeClass(document.body, 'sidebar-open');
          this.renderer.addClass(document.body, 'sidebar-collapse');
        } else {
          this.renderer.removeClass(document.body, 'sidebar-collapse');
          this.renderer.addClass(document.body, 'sidebar-open');
        }

        if (!layoutOptions.sidebarControlOpened) {
          this.renderer.removeClass(document.body, 'control-sidebar-open');
          this.renderer.addClass(document.body, 'control-sidebar-collapse');
        } else {
          this.renderer.removeClass(document.body, 'control-sidebar-collapse');
          this.renderer.addClass(document.body, 'control-sidebar-open');
        }

        if (!layoutOptions.isBodySmallText) {
          this.renderer.removeClass(document.body, 'text-sm');
        } else {
          this.renderer.addClass(document.body, 'text-sm');
        }

        if (this.currentAccentClass) {
          this.renderer.removeClass(document.body, this.currentAccentClass);
        }
        this.currentAccentClass = layoutOptions?.colorVariants?.accent;
        if (this.currentAccentClass) {
          this.renderer.addClass(document.body, this.currentAccentClass);
        }
      })
    );
  }

  /**
   * @method ngOnDestroy
   */
  ngOnDestroy(): void {
    this.subscriptions = removeSubscriptions(this.subscriptions);
  }

  private applyBodyClasses(cssClasses: string | Array<string>): void {
    let arrayClass: Array<string> = [];
    if (typeof cssClasses === 'string') {
      arrayClass = cssClasses.split(' ');
    } else {
      arrayClass = cssClasses;
    }

    // Remove only classes that are not in cssClasses
    this.currentClasses.forEach((cssClasse: string) => {
      if (!arrayClass.includes(cssClasse)) {
        this.renderer.removeClass(document.body, cssClasse);
      }
    });

    // Add only classes that are not in currentClasses
    arrayClass.forEach((cssClasse: string) => {
      if (!this.currentClasses.includes(cssClasse)) {
        this.renderer.addClass(document.body, cssClasse);
      }
    });
    // Update current classes for futur updates
    this.currentClasses = [...cssClasses];
  }
}
