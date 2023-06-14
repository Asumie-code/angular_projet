import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tap } from "rxjs";



@Injectable()
export class DownloaderService {
    constructor(
        private http: HttpClient
    ) {}

    getTextFile(filename: string) {
        return this.http.get(filename, {responseType: 'text'}).pipe(
            tap({
                next: (data) => console.log(data), 
                error: (error) => console.log(error)
            })
        )
    }

}