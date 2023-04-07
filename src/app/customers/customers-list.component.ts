import { Component } from "@angular/core";
import { Observable } from "rxjs";


import { Customer,CustomersService } from "./customers.service";


@Component({
    template: `
        <h3 highlight>Customer List</h3>
        <div *ngFor='let customer of customers | async'>
            <a routerLink="{{customer.id}}">{{customer.id}} - {{customer.name}}</a>
        </div>
    `
})

export class CustomersListComponent {
    customers: Observable<Customer[]>
    constructor(private customerService: CustomersService) {
        this.customers = this.customerService.getCustomers()
    }
}