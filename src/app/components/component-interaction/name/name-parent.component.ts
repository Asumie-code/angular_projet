import { Component } from "@angular/core";


@Component({
    selector: 'app-name-parent', 
    template: `
        <h2>Master controls {{names.length}} names</h2>

        <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
    `
})
export class NameparentComponent {
    // display 'Dr. IQ', '<no name set>', 'Bombasto'
    names =  ['Dr. IQ', '  ', '  Bombasto ']
}