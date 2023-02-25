import { Component, HostBinding } from "@angular/core";

@Component({
    selector: 'comp-with-host-binding',
    template: 'I am a Component'
})

export class CompWithHostBindingComponent {
    @HostBinding('class.special')
    isSpecial = false; 

    @HostBinding('sytle.color')
    color = 'pink' 

    @HostBinding('style.width')
    width = '200px'
}