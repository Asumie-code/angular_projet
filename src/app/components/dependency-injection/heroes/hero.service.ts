import { Injectable, Inject} from "@angular/core";
import { HEROES } from "./mock-heroes";
import { DiLogger } from "../di-logger.service";
import { UserService } from "../user.service";


@Injectable({
    providedIn: 'root', 
    useFactory: (logger: DiLogger, userService: UserService) => 
    new HeroService(logger, userService.user.isAuthorized), 
    deps: [DiLogger, UserService]
})
export class HeroService {
    constructor(
        private logger: DiLogger, 
        private isAuthorized: boolean,
    ) {}

    getHeroes() {
        const auth = this.isAuthorized ? 'authorized ': 'unauthorized' 
        this.logger.log(`Getting heroes for ${auth} user.`)
        return HEROES.filter(hero => this.isAuthorized || !hero.isSecret)
    }
}



// equavilant way to do the same thing 
// @Injectable({
//     providedIn: 'root'
// })
// export class HeroService {
//     constructor(
//         private logger: DiLogger, 
//         @Inject(UserService) private isAuthorized: boolean,
//     ) {}

//     getHeroes() {
//         const auth = this.isAuthorized ? 'authorized ': 'unauthorized' 
//         this.logger.log(`Getting heroes for ${auth} user.`)
//         return HEROES.filter(hero => this.isAuthorized || !hero.isSecret)
//     }
// }




