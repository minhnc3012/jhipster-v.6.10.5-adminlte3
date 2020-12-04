import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

import { ColorService } from './color.service';

@Directive({
  selector: '[jhiColor]',
  providers: [ColorService],
})
export class BackgroundColorDirective {
  private prefix?: string;
  private color?: string;
  @Input('jhiColorCondition') condition = true;
  @Input('jhiColorProperty') property?: string = '';
  /**
   * @method constructor
   * @param elementRef   [description]
   * @param renderer2    [description]
   * @param colorService [description]
   */
  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private colorService: ColorService) {}

  @Input('jhiColorPrefix') set setPrefix(prefix: string) {
    this.prefix = prefix;
    this.colorService.setBackgroundColor(this.color || '', this.condition, this.property || '', this.prefix);
  }
  @Input('jhiColor') set setColor(color: string) {
    this.color = color;
    this.colorService.setBackgroundColor(this.color, this.condition, this.property || '', this.prefix || '');
  }
}

@Directive({
  selector: '[jhiFontColor]',
  providers: [ColorService],
})
export class ColorDirective {
  /**
   * @method constructor
   * @param elementRef   [description]
   * @param renderer2    [description]
   * @param colorService [description]
   */
  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private colorService: ColorService) {}

  @Input('jhiFontColor') set color(color: string) {
    this.colorService.setFontColor(color);
  }
}
