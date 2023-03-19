import { Component } from "@angular/core";
import { UserService } from "./user.service";


@Component({
    selector: 'dependency-injection', 
    template: `
        <h1>{{title}}</h1>
        <app-car></app-car>
        <di-injector></di-injector>
        <h2>User</h2>
        <p id="user">
            {{userInfo}}
            <button (click)="nextUser()">Next User</button>
        </p>
        <di-heroes id="authorized" *ngIf="isAuthorized"></di-heroes>
        <di-heroes id="unauthorized" *ngIf="!isAuthorized"></di-heroes>
        <di-heroes-tsp id="tspAuthorized" *ngIf="isAuthorized"></di-heroes-tsp>
    `
})

export class DependencyInjectionComponent {
    title: string = 'Dependency Injection'

    constructor(
        private userService: UserService
    ) {}


    get isAuthorized() { return this.user.isAuthorized  }
    nextUser() { this.userService.getNewUser() }
    get user() { return this.userService.user}
    get userInfo() {
        return `Current user, ${this.user.name}, is ${this.isAuthorized? '' : 'not'} authorized.`
    }
}