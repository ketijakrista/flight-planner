import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flight-planner';

  loginAdmin(): void {
    localStorage.setItem('admin', 'codelex-admin:Password123')
  }
}
