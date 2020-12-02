import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guarded',
  template: `
    <p>
      I am a locked 🔐 component!
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
