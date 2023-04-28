import { Injectable } from "@angular/core";


@Injectable() 
export class StandloneAppBootstrapService {
    standlone() {
        return 'this message is from standlone-app-bootstrap service which is provided in bootstrapApplication'
    }
}