import {Directive, OnInit, OnDestroy} from '@angular/core'
import { LoggerService } from 'src/app/services/logger.service'


let nextId = 1 


// spy on any element to which it is applied 
// usage: <div appspy>..</div>

@Directive({
    selector: '[appSpy]'

})
export class SpyDirective implements OnInit, OnDestroy {
    private id = nextId++

    constructor(private logger: LoggerService) {}

    ngOnInit(): void {
        this.logger.log(`spy #${this.id} onInit`)
    }

    ngOnDestroy(): void {
        this.logger.log(`spy #${this.id} onDestory`)
        
    }
}