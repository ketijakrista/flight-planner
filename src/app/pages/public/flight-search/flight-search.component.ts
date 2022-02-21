import { Component } from '@angular/core';
import { FlightService } from '../../../shared/services/flight.service';
import { Observable } from 'rxjs';
import { Flight, SearchFlightQuery } from '../../../shared/models/flight.model';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {
  flights$?: Observable<Flight[]>;

  constructor(private flightService: FlightService) {
  }

  submitForm(query: SearchFlightQuery): void {
    this.flights$ = this.flightService.searchFlights(query);
  }
}
