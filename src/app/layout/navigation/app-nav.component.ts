import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationItem, NavigationPosition, PositionScreen } from './navigation-item.model';

const defaultIcon = 'menu';
const defaultColor = 'red';

const defaultPosition: NavigationPosition = {
  vertical: PositionScreen.Start,
  horrizontal: PositionScreen.Start,
}
const availablePositions = [];

@Component({
  selector: 'piNavigation',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class Navigation implements OnInit, OnChanges {
  public opened: boolean = false;

  /**
  * dataSource of navigationItems
  */
  @Input() public items: NavigationItem[] = [];

  /**
  * Icon
  */
  @Input() public icon: string = defaultIcon;

  /**
  * background color
  */
  @Input() public backgroundColor: string = defaultColor;
  
  /**
  * LayoutPosition metadata
  */
  @Input() public position: NavigationPosition = defaultPosition;

  constructor() {
    this.changeColor('black')
    console.log(document.documentElement.style)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {

  }

  execute(e: any): void {
    e.preventDefault();
    console.log(e)
  }

  changeColor(color: string): void {
    document.documentElement.style.setProperty('--dynamic-color', color);
  }

  changePosition(event: any) {
    const position: NavigationPosition = {
      horrizontal: PositionScreen.Center,
      vertical: PositionScreen.Start,
    }
    document.documentElement.style.setProperty('--dynamic-position-H', position.horrizontal);
    document.documentElement.style.setProperty('--dynamic-position-V', position.vertical);
  }
}
