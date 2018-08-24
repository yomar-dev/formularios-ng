import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {
  user: Object = {
    name: null,
    lastname: null,
    email: null,
    country: '',
    gender: 'Male',
    agree: false
  };

  countries = [{
    code: 'CO',
    name: 'Colombia'
  },
  {
    code: 'ES',
    name: 'España'
  },
  {
    code: 'AR',
    name: 'Argentina'
  },
  {
    code: 'CL',
    name: 'Chile'
  },
  {
    code: 'PE',
    name: 'Peru'
  },
  {
    code: 'VE',
    name: 'Venezuela'
  },
  {
    code: 'BR',
    name: 'Brasil'
  },
  {
    code: 'MX',
    name: 'Mexico'
  }];

  constructor() { }

  save(template: NgForm) {
    console.log('Template => ', template);
    console.log('Value => ', template.value);
    console.log('User =>', this.user);
  }

}
