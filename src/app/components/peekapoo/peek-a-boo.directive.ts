import { Directive, OnInit } from "@angular/core";

import { LoggerService } from "src/app/services/logger.service";


let nextId = 1 


@Directive(
    {selector: '[appPeekABook]'}
)
export class PeekABooDirective implements OnInit {
     constructor(private logger: LoggerService) {}
    // implement OnInit's 'ngOnInit' method 
    ngOnInit(): void {
        this.logIt('OnInit')
    }

    logIt(msg: string) {
        this.logger.log(`#${nextId++} ${msg}`)
    }
}