import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Flight } from '../models/flight.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminFlightService {

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  addFlight(query: any): Observable<Flight> {
    const url = [
      environment.baseUrl,
      'admin-api/flights'
    ].join('');

    const options = {headers: {'Add-Auth-Data': ''}, withCredentials: true}

    return this.http.put<Flight>(url, query, options).pipe(map(flight => {
      this.toastr.success('Flight successfully added!');
      return flight
    }));
  }

  findFlight(id: number): Observable<Flight> {
    const url = [
      environment.baseUrl,
      'admin-api/flights/',
      id
    ].join('');

    const options = {headers: {'Add-Auth-Data': ''}, withCredentials: true}

    return this.http.get<Flight>(url, options)
  }
}
