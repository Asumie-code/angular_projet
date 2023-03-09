import { Directive, Input, TemplateRef, ViewContainerRef  } from "@angular/core";


/*
    Add the template content to the DOM unless the condition is true 

    If the expression assigned to 'appUnless' evaluates to a trutghy value 
    then the templated elements are removed from the DOM , 
    the templated elements are (re)inserted into the DOM

    <div *appUnless="errorCount" class="success"> 
        Congrats! Everything is great! 
    </div>

    ### synta 
    - `<div *appUnless="condition">...</div>`
    - `<ng-template [appUnless]="condition"><div>...</div></ng-template>

*/

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    private hasView = false 

    constructor(
        private templateRef: TemplateRef<any>, 
        private viewContainer: ViewContainerRef
    ) {}

    @Input() set appUnless(condition: boolean)  {
        if(!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef)
            this.hasView = true
        } else if (condition && this.hasView) {
            this.viewContainer.clear() 
            this.hasView = false
        }
    }

}