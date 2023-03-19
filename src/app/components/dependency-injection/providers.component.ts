// a collection of demo components showing different ways to provide services in @Component metadata 


import { Component, Inject, Injectable, OnInit } from "@angular/core";


import { 
    APP_CONFIG, 
    AppConfig, 
    HERO_DI_CONFIG
 } from "./app.config";

 import { HeroService } from "./heroes/hero.service";
 import { heroServiceProvider } from "./heroes/hero.service.provider";
 import { DiLogger } from "./di-logger.service";
 import { UserService } from "./user.service";



 const template = '{{log}}'


 @Component({
    selector: 'provider-1', 
    template, 
    providers: [DiLogger]
 })
 export class Provider1Component {
    log: string 

    constructor(logger: DiLogger) {
        logger.log('Hello from Dilogger provided with logger class')
        this.log = logger.logs[0]
    }
 }


 /////////////////////////////////

 @Component({
    selector: 'provider-3', 
    template, 
    providers: [
        { provide: DiLogger, useClass: DiLogger }
    ]
 })
 export class Provider3Component {
    log: string;
    constructor(logger: DiLogger) {
        logger.log('Hello from Dilogger provided with useClass: DiLogger')
        this.log =  logger.logs[0]
    }
 }


 //////////////////////////////////

 export class BetterLogger extends DiLogger {}

 @Component({
    selector: 'provider-4', 
    template, 
    providers: [
        { provide: DiLogger, useClass: BetterLogger }
    ]
 })
export class Provider4Component {
    log: string 
    constructor(logger: DiLogger) {
        logger.log('Hello from DiLogger provided with useClass:BetterLogger')
        this.log = logger.logs[0]
    }
}



///////////////////////////////////
@Injectable() 
export class EvenBetterLogger extends DiLogger {
    constructor(private userService: UserService) { super() }
    override log(message: string) {
        const name = this.userService.user.name
        super.log(`Message to ${name}: ${name}`)
    }
}


@Component({
    selector: 'provider-5', 
    template, 
    providers: [
        UserService, 
        { provide: DiLogger, useClass: EvenBetterLogger}
    ]
})
export class Provider5Component {
    log: string 
    constructor(logger: DiLogger) {
        logger.log('Hello from EvenBetterLogger')
        this.log = logger.logs[0]
    }
}


///////////////////////////////////////

export class NewLogger extends DiLogger {}

export class OldLogger {
    logs: string[] = []
    log(message: string) {
        throw new Error('should not call the old logger')
    }
    
}

@Component({
    selector: 'provider-6a',
    template, 
    providers: [
        NewLogger, 
        // not aliased! creates two instances of 'NewLogger'
        {provide: OldLogger, useClass: NewLogger}
    ]
})
export class Provider6aComponent {
    log: string 
    constructor(newLogger: NewLogger, oldLogger: OldLogger) {
        if(newLogger === oldLogger) {
            throw new Error('expected the two logges to be different instances')
        }
        oldLogger.log('Hello OldLogger (but we want NewLogger)')
        // the newLogger wasn't called so no logs[] 
        // display the logs of the oldLogger
        this.log = newLogger.logs[0] || oldLogger.logs[0]


    }

}

@Component({
    selector: 'provider-6b',
    template, 
    providers: [
        NewLogger, 
        // alias OldLogger w/ reference to NewLogger
        { provide: OldLogger, useExisting: NewLogger}
    ]
})
export class Provider6bComponent {
    log: string 
    constructor(newLogger: NewLogger, oldLogger: OldLogger) {
        if( newLogger !== oldLogger) {
            throw new Error('exptected the two loggers to be the same instance')
        }
        oldLogger.log('Hello from the NewLogger (via aliased OldLogger)')
        this.log = newLogger.logs[0]
    }
}



//////////////////////////////////////// 

// an object in the shape of the logger service 

function silentLoggerFn() {}

export const SilentLogger = {
    logs: ['Silent logger says "SHHHH"!. provided via "useValue" '],
    log: silentLoggerFn
}

@Component({
    selector: 'provider-7', 
    template, 
    providers: [
        { provide: DiLogger, useValue: SilentLogger }
    ]
})
export class Provider7Component {
    log: string;
    constructor(logger: DiLogger) {
        logger.log('Hello from Dilogger provided with useValue')
        this.log =  logger.logs[0]
    }
}


////////////// 

@Component({
    selector: 'provider-8', 
    template, 
    providers: [heroServiceProvider, DiLogger, UserService]
})
export class Provider8Component {
    // must be true else this component would have blown up at runtime
    log = 'Hero service injected successfully via heroServiceProvider'

    constructor(heroService: HeroService) {}
}


///////////// 


@Component({
    selector: 'provider-9', 
    template, 
    // can't use interface as provider token 
    // [{ provide: AppConfig, useValue: HERO_DI_CONFIG}]
    providers: [
        { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
    ]
})
export class Provider9Component implements OnInit {
    log = ''
    // can't inject using the interface as the parameter type 
    // constructor(private config: AppConfig) {}
    constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

    ngOnInit(): void {
        this.log = 'APP_CONFIG Application title is ' + this.config.title
    }
}

/////////////////// 
//sample providers 1 to 7 illustrate a required logger dependency 
// optional logger can be null 

import { Optional } from "@angular/core";

const someMessage = 'Hello from the injected logger'

@Component({
    selector: 'provider-10', 
    template, 
    providers: [
        { provide:DiLogger, useValue: null }
    ]
})
export class Provider10Component implements OnInit {
    log = '' 

    constructor(@Optional() private logger?: DiLogger) {
        if(this.logger) {
            this.logger.log(someMessage)
        }
    }

    ngOnInit(): void {
        this.log = this.logger ? this.logger.logs[0] : 'Optional logger was not available'
    }
}



@Component({
    selector: 'di-providers',
    template: `
    <h2>Provider variations</h2>
    <div id="p1"><provider-1></provider-1></div>
    <div id="p3"><provider-3></provider-3></div>
    <div id="p4"><provider-4></provider-4></div>
    <div id="p5"><provider-5></provider-5></div>
    <div id="p6a"><provider-6a></provider-6a></div>
    <div id="p6b"><provider-6b></provider-6b></div>
    <div id="p7"><provider-7></provider-7></div>
    <div id="p8"><provider-8></provider-8></div>
    <div id="p9"><provider-9></provider-9></div>
    <div id="p10"><provider-10></provider-10></div>
    `
  })
  export class ProvidersComponent { }
  