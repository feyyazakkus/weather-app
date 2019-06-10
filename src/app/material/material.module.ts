import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class MaterialModule {}
