import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule
  ]
})
export class MaterialModule { }