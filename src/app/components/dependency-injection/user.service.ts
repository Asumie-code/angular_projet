import { Injectable } from "@angular/core";

export class User {
    constructor(
        public name: string, 
        public isAuthorized = false
    ) {}

}



const alice = new User('Alice', true)
const bob = new User('bob', false)


@Injectable({
    providedIn: 'root'
})
export class UserService {
    user = bob;  // initial user is bob

    //swap users 
    getNewUser() {
        return this.user = this.user === bob ? alice : bob
    }
}