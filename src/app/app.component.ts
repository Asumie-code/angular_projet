import { Component, HostBinding } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'some title'
  @HostBinding('@.disabled')
  public animationsDisabled = false


  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled
  }


}
