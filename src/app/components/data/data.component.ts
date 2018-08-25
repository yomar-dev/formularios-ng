import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  formData: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', [
                                      Validators.required,
                                      Validators.email,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]
                              )
    });
  }

  saveChanges() {
    console.log(this.formData.value);
    console.log(this.formData);
  }

}
