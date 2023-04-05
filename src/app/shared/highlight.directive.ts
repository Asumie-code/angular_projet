import { Directive, ElementRef } from "@angular/core";

@Directive({ selector: '[highlight], input'})
// highlight the attached element or an InputElement in gray 
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = '#efeeed'
        console.log(
            `* Shared highlight called for ${el.nativeElement.tagName}`
        )
    }
}