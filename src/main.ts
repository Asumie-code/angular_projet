// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


import { bootstrapApplication } from "@angular/platform-browser";
import { TopLevelSlComponent } from "./app/top-level-sl/top-level-sl.component";
import { StandloneAppBootstrapService } from "./app/standlone-app-bootstrap.service";


bootstrapApplication(TopLevelSlComponent, {
  providers: [StandloneAppBootstrapService]
}).catch(e => console.error(e))