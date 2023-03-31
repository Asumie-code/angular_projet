import { Component } from "@angular/core";
import { UserService } from "./user.service";


@Component({
    selector: 'app-greeting', 
    templateUrl: './greeting.component.html'
})
export class GreetingComponent {
    title ='NgModules'
    user = ''

    constructor(userService: UserService) {
        this.user = userService.userName
    }
}