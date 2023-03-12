import { Component } from "@angular/core";


@Component({
    selector: 'dependency-injection', 
    template: `
        <h1>{{title}}</h1>
        <app-car></app-car>
    `
})

export class DependencyInjectionComponent {
    title: string = 'Dependency Injection'
}