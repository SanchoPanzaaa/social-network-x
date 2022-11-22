import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Dashboard } from './dashboard.component';
import { LayoutBody } from './body/body.component';
import { LayoutCorner } from './corner/corner.layout';
import { LayoutFooter } from './footer/footer.component';

@NgModule({
  declarations: [
    Dashboard,
    LayoutBody,
    LayoutCorner,
    LayoutFooter,
  ],
  imports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    BrowserModule,
  ],
  exports: [
    Dashboard
  ],
  providers: [],
})
export class DashboardModule { }
