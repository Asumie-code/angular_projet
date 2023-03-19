import { Component, Inject } from "@angular/core";
import { UserService } from "./user.service";

import { APP_CONFIG, AppConfig } from "./app.config";

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
        <di-providers></di-providers>
    `
})

export class DependencyInjectionComponent {
    title: string;

    constructor(
        @Inject(APP_CONFIG) config: AppConfig,
        private userService: UserService

    ) {
        this.title = config.title
    }


    get isAuthorized() { return this.user.isAuthorized  }
    nextUser() { this.userService.getNewUser() }
    get user() { return this.userService.user}
    get userInfo() {
        return `Current user, ${this.user.name}, is ${this.isAuthorized? '' : 'not'} authorized.`
    }
}