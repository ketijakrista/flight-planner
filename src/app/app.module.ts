import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './pages/public/flight-search/flight-search.component';
import { FlightAddComponent } from './pages/admin/flight-add/flight-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { PublicComponent } from './pages/public/public.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FlightFindComponent } from './pages/admin/flight-find/flight-find.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { FlightCardComponent } from './pages/public/flight-search/flight-card/flight-card.component';
import { FlightSearchFormComponent } from './pages/public/flight-search/flight-search-form/flight-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightAddComponent,
    PublicComponent,
    AdminComponent,
    HeaderComponent,
    FlightFindComponent,
    FlightCardComponent,
    FlightSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
