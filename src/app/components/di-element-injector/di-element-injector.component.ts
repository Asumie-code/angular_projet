import { Component } from "@angular/core";


@Component({
    selector: 'di-element-injector', 
    template: `
        <label>
            <input 
                 type="checkbox"
                 [checked]="showHeroes"
                 (change)="showHeroes=!showHeroes"
            >
            Heroes
        </label>

        <label>
            <input 
                 type="checkbox"
                 [checked]="showVillains"
                 (change)="showVillains=!showVillains"
            >
            Villians
        </label>

        <label>
            <input 
                 type="checkbox"
                 [checked]="showCars"
                 (change)="showCars=!showCars"
            >
            Cars
        </label>


        <h1>Hierarchical Dependency Injection</h1>

        <di-villains-list  *ngIf="showVillains"></di-villains-list>
        <di-cars  *ngIf="showCars"></di-cars>
    `
})
export class DiElementInjector {
    showCars = true 
    showHeroes = true 
    showVillains = true
}