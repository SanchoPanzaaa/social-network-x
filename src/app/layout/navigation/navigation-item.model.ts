export enum PositionScreen {
  Start = 'start',
  Center = 'center',
  End = 'end',
}

export interface NavigationPosition {
  vertical: PositionScreen;
  horrizontal: PositionScreen;
}

export interface NavigationItem {
  id: string;
  name: string;
  icon: string;
  active: boolean;
  children?: NavigationItem;
  parent?: NavigationItem;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: '1',
    icon: 'home',
    name: 'home',
    active: true,
  },
  {
    id: '2',
    icon: 'person',
    name: 'profile',
    active: false,
  },
]
