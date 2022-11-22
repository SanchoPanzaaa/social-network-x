import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'piCorner',
  templateUrl: './corner.layout.html',
  styleUrls: ['./corner.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutCorner implements OnChanges {

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
