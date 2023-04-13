import { Component, Host, Optional } from "@angular/core";

import { HeroCacheService } from "./hero-cache.service";
import { LoggerService } from "./logger.service";



@Component({
    selector: 'app-hero-contact', 
    template: `
        <div>Phone #: {{phoneNumber}}</div>
        <span *ngIf="hasLogger">!!!</span>
    `
})
export class HeroContactComponent {
    hasLogger = false 

    constructor(
       @Host() // limit the host component's instance of the heroCacheService
       private heroCache: HeroCacheService, 

       @Host() // limit search for logger; hides the application-wide logger 
       @Optional() // ok if the logger doesn't exist 
       private loggerService?: LoggerService
    ) {
        if(loggerService) {
            this.hasLogger = true 
            loggerService.logInfo('HeroContactComponent can log')
        }
    }

    get phoneNumber() { return this.heroCache.hero.phone }
}