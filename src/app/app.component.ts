import { Component } from '@angular/core';
import { NavigationItem, NavigationItems } from './layout/navigation/navigation-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigationItems: NavigationItem[] = NavigationItems;

  title = 'social-network-x';

}
