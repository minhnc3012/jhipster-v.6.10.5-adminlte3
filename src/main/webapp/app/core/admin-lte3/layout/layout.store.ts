import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { LayoutConfig, LayoutOptions } from './layout.config';

@Injectable({ providedIn: 'root' })
export class LayoutStore {
  public readonly observable: Observable<LayoutConfig>;
  private behaviorSubject: BehaviorSubject<LayoutConfig>;

  private readonly layoutConfig: LayoutConfig = {
    logo: '',
    appName: 'Appication',
    type: 'sidebar-mini layout-fixed layout-navbar-fixed',
    layoutOptions: {
      sidebarMenuOpened: true,
      sidebarControlOpened: false,
      isBodySmallText: false,
      isNavbarSmallText: false,
      isSidebarNavSmallText: false,
      isFooterSmallText: false,
      isSidebarNavFlatStyle: false,
      isSidebarNavLegacyStyle: false,
      isSidebarNavCompact: false,
      isSidebarNavChildIndent: false,
      isMainSidebarDisableHoverOrFocusAutoExpand: false,
      isBrandSmallText: false,
      colorVariants: {
        navbar: { brightness: 'dark', color: 'primary' },
        menuSidebar: 'dark-primary',
        accent: '',
        brandLogo: '',
      },
    },
  };

  /**
   * @method constructor
   * @param layoutConfig [description]
   */
  constructor(@Optional() layoutConfig?: LayoutConfig) {
    if (layoutConfig) {
      this.layoutConfig = Object.assign(this.layoutConfig, layoutConfig);
    }
    this.behaviorSubject = new BehaviorSubject(this.layoutConfig);
    this.observable = this.behaviorSubject.asObservable();
  }

  get logo(): Observable<string> {
    const pluckValue: any = pluck('logo') || '';
    return this.observable.pipe(pluckValue, distinctUntilChanged());
  }

  /**
   * [appName description]
   * @method appName
   * @return [description]
   */
  get appName(): Observable<string> {
    const pluckValue: any = pluck('appName') || '';
    return this.observable.pipe(pluckValue, distinctUntilChanged());
  }

  /**
   * [appName description]
   * @method type
   * @return [description]
   */
  get type(): Observable<string> {
    const pluckValue: any = pluck('type');
    return this.observable.pipe(pluckValue, distinctUntilChanged());
  }

  /**
   * [layoutOptions description]
   * @method layoutOptions
   * @return [description]
   */
  get layoutOptions(): Observable<LayoutOptions> {
    const pluckValue: any = pluck('layoutOptions') || {};
    return this.observable.pipe(pluckValue, distinctUntilChanged());
  }

  /**
   * [setLogo description]
   * @method setLogo
   * @param value [description]
   */
  public setLogo(value: string): void {
    this.behaviorSubject.next(Object.assign(this.behaviorSubject.value, { logo: value }));
  }

  /**
   * [setAppName description]
   * @method setAppName
   * @param value [description]
   */
  public setAppName(value: string): void {
    this.behaviorSubject.next(Object.assign(this.behaviorSubject.value, { appName: value }));
  }

  /**
   * [setType description]
   * @method setType
   * @param value [description]
   */
  public setType(value: string): void {
    this.behaviorSubject.next(Object.assign(this.behaviorSubject.value, { type: value }));
  }

  /**
   * [setLayoutOptions description]
   * @method setLayoutOptions
   * @param value [description]
   */
  public setLayoutOptions(value: LayoutOptions): void {
    this.behaviorSubject.next(Object.assign(this.behaviorSubject.value, { layoutOptions: value }));
  }
}
