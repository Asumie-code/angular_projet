import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'awesome'})
// precede the input string witht he word "Awesome"
export class AwesomePipe implements PipeTransform {
    transform(phrase: string ) {
        return phrase ? 'Awesome ' + phrase : ''
    }
}