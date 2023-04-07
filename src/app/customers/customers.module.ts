import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

import { CustomersComponent } from "./customers.component";
import { CustomersDetailComponent } from "./customers-detail.component";
import { CustomersListComponent } from "./customers-list.component";

import { CustomersService } from "./customers.service";
import { CustomersRoutingModule } from "./customers-routing.module";



@NgModule({
    imports: [ SharedModule, CustomersRoutingModule ], 
    declarations: [
        CustomersComponent, 
        CustomersDetailComponent, 
        CustomersListComponent
    ], 
    providers: [ CustomersService ]
})
export class CustomerModule {}