import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guarded',
  template: `
    <p>
      guarded works!
    </p>
  `,
  styles: [
  ]
})
export class GuardedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
