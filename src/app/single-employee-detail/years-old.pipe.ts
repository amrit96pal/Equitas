import { Pipe, PipeTransform } from '@angular/core';

//this is the custom pipe used for taking in the age of the employee and adding the "years old" to it and return
@Pipe({ name: 'yearsOld' })
export class yearsOld implements PipeTransform {
    transform(value: Number | undefined): string {
        if (value)
            return value.toString() + " years old";
        else
            return "";
    }
}