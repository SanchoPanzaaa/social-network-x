import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { NavigationModule } from './layout/navigation/app-nav.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavigationModule,
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
