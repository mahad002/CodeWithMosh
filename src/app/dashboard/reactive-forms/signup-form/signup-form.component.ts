import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
    username: new FormControl('', {
      asyncValidators: [
        UsernameValidators.shouldBeUnique as AsyncValidatorFn
        
      ],
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ]
    }),
    password: new FormControl()
  })
  });
  get username() {
    return this.form.get('account.username');
  }

  login() {
    // authService.login(this.form.value);
    this.form.setErrors({
      invalidLogin: true
    });
  }

}