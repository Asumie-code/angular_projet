import { Directive, HostBinding,   HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @HostBinding('style.backgroundColor') color = '' 
    
    @Input()  appHighlight = ''

    @Input() defaultColor = ''

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight || this.defaultColor || 'red')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('')
    }

    private highlight(color: string) {
        this.color = color
    }
}
