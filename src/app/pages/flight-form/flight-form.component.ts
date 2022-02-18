import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminFlightService } from '../../shared/services/admin-flight.service';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  flightForm = new FormGroup({})

  constructor(private fb: FormBuilder, private adminFlightService: AdminFlightService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.flightForm = this.fb.group({
      from: this.fb.group({
        country: [''],
        city: [''],
        airport: ['']
      }),
      to: this.fb.group({
        country: [''],
        city: [''],
        airport: ['']
      }),
      carrier: [''],
      departureTime: [''],
      arrivalTime: ['']
    })
  }

  submitForm(): void {
    console.log(this.flightForm.value)
    this.adminFlightService.addFlight(this.flightForm.value).subscribe()
  }
}
