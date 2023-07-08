import { FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class UsernameValidators{
    static cannotContainSpace(control: FormControl):ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpace: true};
        return null;
    }

    static shouldBeUnique(control: FormControl): Observable<ValidationErrors | null> | Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'mosh')
                    resolve({shouldBeUnique: true});
                else
                    resolve(null);
            }, 2000);
        });
    }
        

}