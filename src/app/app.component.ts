import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guarded = false;

  toggleRestriction(): void {
    this.guarded = !this.guarded;
  }
}
