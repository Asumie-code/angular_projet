import { Component, AfterContentChecked, AfterContentInit, ContentChild } from "@angular/core";


import { ChildComponent } from "./child.component";
import { LoggerService } from "src/app/services/logger.service";








@Component({
    selector: 'after-content', 
    template: `
         <div>projected content begins</div>
         <ng-content></ng-content>
         <div></div>

         <p *ngIf="comment" class="comment">
            {{comment}}
         </p>
    `
})

export class  AfterContentComponent implements AfterContentChecked, AfterContentInit{
    comment = ''
    private prevHero = ''

    // query for a content child of type 'ChildComponent' 
    @ContentChild(ChildComponent) contentChild!: ChildComponent

    constructor(private logger: LoggerService) {
        this.logIt('AfterContent constructor')
    }


    ngAfterContentInit(): void {
        // contentChild is set after the content has been initialized 
        this.logIt('AftercontentInit')
        this.doSomething()
    }

    ngAfterContentChecked(): void {
        // contentChild is updated after the content has been checked
        if (this.prevHero === this.contentChild.hero) {
            this.logIt('AfterContentChecked (no change)')
        } else {
            this.prevHero = this.contentChild.hero
            this.logIt('AfterContentChecked')
            this.doSomething()
        }
    }



    // this surrogate for real business logic sets the 'comment' 
    private doSomething() {
        this.comment = this.contentChild.hero.length > 10 ? "that's a long name": ''
    }


    private logIt(method: string) {
        const child = this.contentChild
        const message = `${method}: ${child ? child.hero: 'no'} child content`
        this.logger.log(message)
    }


}