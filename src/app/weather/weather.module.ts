import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { MaterialModule } from '../material/material.module';
import { WeatherService } from './weather.service';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
