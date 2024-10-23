import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { DescriptionComponent } from './description/description.component';
import { FormsModule } from '@angular/forms';
import { AddFlightComponent } from './add-flight/add-flight.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    FlightsSearchComponent,
    DescriptionComponent,
    AddFlightComponent
  ]
})
export class FlightsModule { }
