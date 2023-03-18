import { HeroService } from "./hero.service";
import { DiLogger } from "../di-logger.service";
import { UserService } from "../user.service";


const heroServiceFactory = (logger: DiLogger, userService: UserService) => 
        new HeroService(logger, userService.user.isAuthorized)



export const heroServiceProvider = {
    provide: HeroService, 
    useFactory: heroServiceFactory, 
    deps: [DiLogger, UserService]
}

