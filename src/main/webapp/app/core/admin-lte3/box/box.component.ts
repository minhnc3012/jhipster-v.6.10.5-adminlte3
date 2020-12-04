import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { AnimationEvent } from '../animations/animations.interface';

import { BoxContentDirective, BoxFooterDirective, BoxHeaderDirective, BoxToolsDirective } from './box.directive';

// import {removeListeners} from '../helpers';

/*
 *
 */
@Component({
  selector: 'jhi-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent implements AfterViewInit, OnDestroy {
  public isCollaping!: boolean;
  public remove = false;
  public removed!: boolean;
  // private listeners = [];

  @Input() public boxColor = 'default';
  @Input() public buttonsStyleClass = 'btn btn-box-tool';
  @Input() public contentStyleClass = 'box-content-wrapper';
  @Input() public contentColor = '';
  @Input() public footer = '';
  @Input() public footerColor = '';
  @Input() public footerStyleClass = 'box-footer';
  @Input() public header = '';
  @Input() public headerBorder = true;
  @Input() public headerColor = '';
  @Input() public headerStyleClass = 'box-header';
  @Input() public isCollapsable = true;
  @Input() public isCollapsed = false;
  @Input() public isLoading?: boolean;
  @Input() public isRemovable = true;
  @Input() public isSolid = false;
  @Input() public loadingColor = '';
  @Input() public loadingStyleClass = 'fa fa-refresh fa-spin';
  @Input() public styleClass = 'box';

  @Output() public collapseDone = new EventEmitter();
  @Output() public collapseStart = new EventEmitter();

  @ContentChild(BoxHeaderDirective, /* TODO: add static flag */ {})
  public boxHeaderDirective: BoxHeaderDirective | undefined;
  @ContentChild(BoxFooterDirective, /* TODO: add static flag */ {})
  public boxFooterDirective: BoxFooterDirective | undefined;
  @ContentChild(BoxContentDirective, /* TODO: add static flag */ {})
  public boxContentDirective: BoxContentDirective | undefined;
  @ContentChild(BoxToolsDirective, /* TODO: add static flag */ {})
  public boxToolsDirective: BoxToolsDirective | undefined;

  @ViewChild('toggleButtonElement')
  private toggleButtonElement!: { nativeElement: any };
  // listenToggleFunc will hold the function returned by "renderer.listen"
  private listenToggleFunc?: Function;

  @ViewChild('removeButtonElement')
  private removeButtonElement!: { nativeElement: any };
  // listenToggleFunc will hold the function returned by "renderer.listen"
  private listenRemoveFunc?: Function;

  /**
   * @method constructor
   * @param changeDetectorRef [description]
   * @param ngZone            [description]
   * @param renderer2         [description]
   */
  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone, private renderer2: Renderer2) {}

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      if (this.toggleButtonElement) {
        this.listenToggleFunc = this.renderer2.listen(this.toggleButtonElement.nativeElement, 'click', () => {
          this.isCollapsed = !this.isCollapsed;
          this.changeDetectorRef.detectChanges();
        });
      }
      if (this.removeButtonElement) {
        this.listenRemoveFunc = this.renderer2.listen(this.removeButtonElement.nativeElement, 'click', () => {
          this.remove = true;
          this.changeDetectorRef.detectChanges();
        });
      }
    });
  }

  /**
   * @method ngOnDestroy
   */
  ngOnDestroy(): void {
    // removeListeners(this.listeners);
    // Removes "listen" listener
    if (this.listenToggleFunc) {
      this.listenToggleFunc();
    }
    if (this.listenRemoveFunc) {
      this.listenRemoveFunc();
    }
  }

  /**
   * [removedDone description]
   * @method removedDone
   * @param event [description]
   */
  public removedDone(event: any): void {
    if (event.toState === '1') {
      this.removed = true;
    }
  }

  /**
   * [collapseStart description]
   * @method collapseStart
   * @param event [description]
   */
  public onCollapseStart(event: AnimationEvent): void {
    if (event.fromState !== 'void') {
      this.isCollaping = true;
      this.collapseStart.emit(event);
    }
  }

  /**
   * [collapseDone description]
   * @method collapseDone
   * @param event [description]
   */
  public onCollapseDone(event: AnimationEvent): void {
    if (event.fromState !== 'void') {
      this.isCollaping = false;
      this.collapseDone.emit(event);
    }
  }
}
