import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'

})
export class StandloneService {
    standlone() {
        return 'this  message is from standlone service providedIn root'
    }
}