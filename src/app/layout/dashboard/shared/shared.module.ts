import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';
import { EButton } from './components/button/button.component';
import { Dialog } from './dialog/dialog.component';
import { ProgressBar } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatModule,
  ],
  declarations: [
    EButton,
    Dialog,
    Notification,
    ProgressBar,
  ],
  exports: [
    // Modules
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
