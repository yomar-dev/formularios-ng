import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {
  user: Object = {
    name: 'Yomar',
    lastname: 'Miranda',
    email: 'yomar@gmail.com'
  };

  constructor() { }

  save(template: NgForm) {
    console.log('Template => ', template);
    console.log('Value => ', template.value);
    console.log('User =>', this.user);
  }

}
