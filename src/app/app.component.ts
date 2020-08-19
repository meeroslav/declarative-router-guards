import { Component } from "@angular/core";
import { GuardedComponent } from "./guarded/guarded.component";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img
        width="300"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
    </div>
    <nav>
      <ul>
        <li><a linkTo="/">Home</a></li>
        <li><a linkTo="/guarded">Guarded</a></li>
        <li><button (click)="toggleGuarded()">Toggle guarded</button></li>
      </ul>
    </nav>
    <router>
      <route path="guarded">
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
  title = "declarative-router-guards";

  toggleGuarded(): void {}
}
