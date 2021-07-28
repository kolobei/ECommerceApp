import { FormControl, ValidationErrors } from "@angular/forms";

export class ShopValidators {

    // whitespace validation
    static notOnlyWthitespace(control: FormControl) : ValidationErrors {

        // check ig string only contains whitespace
        if((control.value != null) && (control.value.trim().length === 0)) {

            // invlaid, return error object
            return { 'notOnlyWhitespace': true };
        } else {
            // valid, return null
            return null;
        }

        
    }
}
