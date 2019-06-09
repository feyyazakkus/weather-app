import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialModule {}
