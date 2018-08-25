import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  formData: FormGroup;
  user: Object = {
    fullname: {
      name: 'Yomar',
      lastname: 'Miranda'
    },
    email: 'yomar@gmail.com',
    // hobbies: ['Play soccer', 'Run', 'Watch series']
  };

  constructor() {
    console.log(this.user);

    this.formData = new FormGroup({
      'fullname': new FormGroup({
                      'name': new FormControl('', [
                                                    Validators.required,
                                                    Validators.minLength(4)
                                                  ]
                                ),
                      'lastname': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [
                                      Validators.required,
                                      // Validators.email,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]
                              ),
      'hobbies': new FormArray([
        new FormControl('Play soccer', Validators.required)
      ])
      });

      // this.formData.setValue(this.user);

    /*this.formData = new FormGroup({
    'name': new FormControl('', [
                                  Validators.required,
                                  Validators.minLength(4)
                                ]
                            ),
    'lastname': new FormControl('', Validators.required),
    'email': new FormControl('', [
                                    Validators.required,
                                    // Validators.email,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                  ]
                            )
    });*/
  }

  addHobby() {
    (<FormArray>this.formData.controls['hobbies']).push(
      new FormControl('', Validators.required)
    );
  }

  saveChanges() {
    console.log(this.formData.value);
    console.log(this.formData);
    this.formData.reset({
      fullname: {
        'name': '',
        'lastname': ''
      },
      email: ''
    });
  }

}
