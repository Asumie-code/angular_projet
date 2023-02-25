import { Attribute, Component } from "@angular/core";


@Component({
    selector: 'app-my-input-with-attribute-decorator', 
    template: '<p>the type of the input is: {{type}}</p>'
})
export class MyInputWithAttributeDecoratorComponent {
    constructor(@Attribute('type') public type: string) {}
}