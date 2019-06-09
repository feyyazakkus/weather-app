import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
