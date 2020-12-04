import { Component, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  templateUrl: './box-default.component.html',
  styleUrls: ['./box-default.component.scss'],
})
export class BoxDefaultComponent implements AfterViewInit {
  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
