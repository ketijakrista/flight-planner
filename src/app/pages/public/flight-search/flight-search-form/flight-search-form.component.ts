import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchFlightQuery } from '../../../../shared/models/flight.model';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent implements OnInit {
  @Output()
  searchFlightEvent = new EventEmitter<SearchFlightQuery>();

  flightSearchForm = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.flightSearchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required]
    })
  }

  submitForm(): void {
    if (this.flightSearchForm.valid) {
      const query = {
        ...this.flightSearchForm.value,
        departureDate: new Date(this.flightSearchForm.value.departureDate).toISOString()
      }
      this.searchFlightEvent.emit(query)
    }
  }
}
