import { AfterViewChecked, AfterViewInit, Component, ViewChild } from "@angular/core";

import { ChildViewComponent } from "./child-view.component";
import { LoggerService } from "src/app/services/logger.service";
import { TitleStrategy } from "@angular/router";


@Component({
    selector: 'after-view',
    templateUrl: './after-view.component.html'
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
    comment = ''
    private prevHero = ''

    //query for a view child of type 'ChildViewComponent' 
    @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent 


    constructor(private logger: LoggerService) {
        this.logIt('AfterView constructor');
    }
    
    ngAfterViewInit(): void {
        // viewChild is set after the view has been initialized
        this.logIt('AfterViewInit')
        this.doSomething()
    }

    ngAfterViewChecked(): void {
        // viewChild is updated after the view has been checked
        if (this.prevHero === this.viewChild.hero) {
            this.logIt('AfterViewChecked (no change)')
        } else {
            this.prevHero = this.viewChild.hero
            this.logIt('AfterViewChecked')
            this.doSomething()
        }
    }

    // this surrogate for real business logic sets the 'comment' 
    private doSomething() {
        const c = this.viewChild.hero.length > 10 ? "that's a long name" : ''; 
        if(c !== this.comment) {
            // wait a tick because the component's view has already been checked
            this.logger.tick_then(() => this.comment = c)
        }
    }

    private logIt(method: string) {
        const child = this.viewChild
        const message = `${method}: ${child? child.hero: 'no'} child view`
        this.logger.log(message)
    }
    
}