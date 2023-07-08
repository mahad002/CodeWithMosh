import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static validOldPassword(control: FormControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
                if(control.value !== '1234')
                    resolve({invalidOldPassword: true});
                else
                    resolve(null);
        });
    }


    static passwordsShouldMatch(control: FormGroup) : ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword?.value !== confirmPassword?.value)
            return { passwordsShouldMatch: true };
        return { passwordsShouldMatch: false };;
    }
}