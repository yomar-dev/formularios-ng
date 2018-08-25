import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
                      'lastname': new FormControl('', [
                                                        Validators.required,
                                                        this.blockLastname
                                                      ])
      }),
      'email': new FormControl('', [
                                      Validators.required,
                                      // Validators.email,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]
                              ),
      'hobbies': new FormArray([
        new FormControl('Play soccer', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.userExist),
      'password': new FormControl('', Validators.required),
      'password_repeat': new FormControl()
      });

      this.formData.controls['password_repeat'].setValidators([
        Validators.required,
        this.isEquals.bind(this.formData)
      ]);

      // Listen changes into form.
      // this.formData.valueChanges.subscribe((data: any) => {
      //   console.log(data);
      // });

      // Listen changes of the one field.
      this.formData.controls['email'].valueChanges.subscribe((data: any) => {
        console.log(data);
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

  blockLastname(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'miranda') {
      return {
        nomiranda: true
      };
    }
    return null;
  }

  isEquals(control: FormControl): { [s: string]: boolean } {
    const form: any = this;
    if (control.value !== form.controls['password'].value) {
      return {
        isEquals: true
      };
    }
    return null;
  }

  userExist(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'yomar-dev') {
          resolve({ exist: true });
        } else {
          resolve(null);
        }
      }, 2500);
    });

    return promise;
  }

  saveChanges() {
    console.log(this.formData.value);
    console.log(this.formData);
    // this.formData.reset({
    //   fullname: {
    //     'name': '',
    //     'lastname': ''
    //   },
    //   email: ''
    // });
  }

}
