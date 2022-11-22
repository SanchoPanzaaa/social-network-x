import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutItem } from '../../corner/layout-item.model';

export enum GridPosition {
  CenterTop = 'center-top',
  CenterLeft = 'left-center',
  CenterRight = 'right-center',
  CenterBot = 'center-bot',

  LeftTop = ''
}
/*
  This service contains layout metadata
  to remember each change

*/


@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  protected layoutItem: Observable<LayoutItem> = new Observable<LayoutItem>;
  protected layoutConfig: Observable<LayoutItem[]> = new Observable<LayoutItem[]>

  move(item: LayoutItem, gridPosition: GridPosition) {
    // TODO: drag&drop
  }

  clear(item: LayoutItem, gridPosition: GridPosition) {
    // TODO: clear component at gridPosition
  }
}
