import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './components/myComponent/my-component.component';
import { AutoMyComponentComponent } from './components/auto-my-component/auto-my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    AutoMyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
