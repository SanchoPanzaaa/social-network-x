import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Navigation } from './app-nav.component';
import { MatModule } from 'src/app/mat.module';


@NgModule({
  declarations: [
    Navigation,
  ],
  imports: [
    MatModule,
    CommonModule,
    BrowserModule,
  ],
  exports: [
    Navigation
  ],
  providers: [],
})
export class NavigationModule { }
