import { Injectable } from "@angular/core";

@Injectable() 
export class StandloneComponentService {
    standlone() {
      return ' this message is from StandloneComponent service which is provided in a standlone sub component'
    }
}