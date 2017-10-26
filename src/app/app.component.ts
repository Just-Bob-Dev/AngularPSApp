import {Component} from '@angular/core';

@Component ({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <h4>Not my first component</h4>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
