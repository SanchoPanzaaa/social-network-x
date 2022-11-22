export interface LayoutItem {
  id: string;
  component: string;

  hint?: string;

  width?: number;
  height?: number;

  fontsize?: number;
  center?: Center;

  // TODO: options, design first
  // what a specific actions or changes might be done through options ??
  options?: [];
}

export enum Center {
  Right = 'right',
  Left = 'left',
  Center = 'center',
}

export enum FeatureIds {
  Button = 'piButton',
  Table = 'table',
  Navigation = 'navigation',
  Avatar = 'avatar',
  Settings = 'settings',
}
