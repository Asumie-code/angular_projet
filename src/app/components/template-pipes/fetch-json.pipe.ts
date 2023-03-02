import { HttpClient } from '@angular/common/http'
import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name: 'fetch', 
    pure: false
})

export class FetchJsonPipe implements PipeTransform {
    private cashedData: any = null
    private cashedUrl = ''

    constructor(private http: HttpClient) { }

    transform(url: string): any {
        if( url !== this.cashedUrl) {
            this.cashedData = null
            this.cashedUrl = url
            this.http.get(url).subscribe(result => this.cashedData = result)
        }

        return this.cashedData
    }
}