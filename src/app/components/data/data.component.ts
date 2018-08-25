import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{
  formData: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      'name': new FormControl('Yomar'),
      'lastname': new FormControl(),
      'email': new FormControl()
    });
  }

  saveChanges() {
    console.log(this.formData.value);
  }

}
