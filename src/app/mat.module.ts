import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';



@NgModule({

  imports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    BrowserModule,
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
})
export class MatModule { }
