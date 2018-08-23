import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }

  save(template: NgForm) {
    console.log('Form sended');
    console.log('Template => ', template);
    console.log('Value => ', template.value);
  }

}
