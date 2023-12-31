import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form:FormGroup;
  constructor(fb:FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.validOldPassword as AsyncValidatorFn,
    blur
    ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    })
   }
   
    get oldPassword(){
      return this.form.get('oldPassword');
    }

    get newPassword(){
      return this.form.get('newPassword');
    }
    
    get confirmPassword(){
      return this.form.get('confirmPassword');
    }

}
