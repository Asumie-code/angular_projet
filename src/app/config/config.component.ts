import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styles: ['.error { color: #b30000; }']
})
export class ConfigComponent { 
    config: Config | undefined 

    constructor(private configService: ConfigService) {}

    showConfig() {
        this.configService.getConfig().subscribe((data: Config) => this.config = {...data})
    }
}