import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Declarative router guard PoC</h1>
    </div>
    <h4>State of guard: {{ guarded }}</h4>
    <nav>
      <ul>
        <li><a linkTo="/">Home</a></li>
        <li><a linkTo="/guarded">Guarded</a></li>
        <li><button (click)="toggleGuarded()">Toggle guarded</button></li>
      </ul>
    </nav>
    <router>
      <route path="guarded" *ngIf="!guarded">
        <app-guarded *routeComponent></app-guarded>
      </route>
      <route path="">
        <app-home *routeComponent></app-home>
      </route>
      <route path="" [exact]="false">
        <app-not-found *routeComponent></app-not-found>
      </route>
    </router>
  `,
  styles: [],
})
export class AppComponent {
  guarded = false;

  toggleGuarded(): void {
    this.guarded = !this.guarded;
  }
}
