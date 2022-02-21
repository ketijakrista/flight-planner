import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminFlightService } from '../../../shared/services/admin-flight.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.scss']
})
export class FlightAddComponent implements OnInit, OnDestroy {
  flightForm = new FormGroup({});

  flightAddSubscription$?: Subscription;

  constructor(private fb: FormBuilder, private adminFlightService: AdminFlightService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.flightAddSubscription$?.unsubscribe();
  }

  buildForm(): void {
    this.flightForm = this.fb.group({
      from: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        airport: ['', Validators.required],
      }),
      to: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        airport: ['', Validators.required],
      }),
      carrier: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required],
    })
  }

  submitForm(): void {
    if(this.flightForm.valid) {
      this.flightAddSubscription$ = this.adminFlightService.addFlight(this.flightForm.value).subscribe()
    }
  }
}
