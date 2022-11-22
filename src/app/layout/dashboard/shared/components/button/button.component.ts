import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'piButton',
  templateUrl: './button.component.html',
  // styleUrls: ['./base-ui-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EButton {


  constructor() {

  }

  execute():void {

  }

  onChange():void {

  }
}
