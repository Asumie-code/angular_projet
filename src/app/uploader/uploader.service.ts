import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpEventType, HttpProgressEvent, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";

import { of } from "rxjs";
import { catchError, last, map, tap } from "rxjs";

import { MessageService } from "../message.service";


@Injectable()
export class UploaderService {
    constructor(
        private http: HttpClient, 
        private messanger: MessageService
    ) {}

    upload(file: File) {
        if (!file) {return of<string>('')}

        const req = new HttpRequest('POST', '/upload/file', file, {
            reportProgress: true
        })

        return this.http.request(req).pipe(
            map(event => this.getEventMessage(event, file)), 
            tap(message => this.showProgress(message)), 
            last(), // return last (completed) message to caller
            catchError(this.handleError(file))
        )
    }

    private getEventMessage(event: HttpEvent<any>, file: File) {
        switch(event.type) {
            case HttpEventType.Sent: 
                return `Uploading file "${file.name}" of size ${file.size}`
            case HttpEventType.UploadProgress: 
                const percentDone = event.total ? Math.round(100 * event.loaded / event.total) : 0
                return `File "${file.name}" is ${percentDone}% uploaded`
            case HttpEventType.Response: 
                return `File "${file.name}" was completely uploaded` 
            default: 
                return `File "${file.name}" surprising upload event: ${event.type}`
        }
    }

     /**
   * Returns a function that handles Http upload failures.
   *
   * @param file - File object for file being uploaded
   *
   * When no `UploadInterceptor` and no server,
   * you'll end up here in the error handler.
   */

     private handleError(file: File) {
        const userMessage = `${file.name} upload failed`

        return (error: HttpErrorResponse) => {
            console.error(error)
            const message = (error.error instanceof Error) ? error.error.message : `server returned code ${error.status} with body "${error.error}"`

            this.messanger.add(`${userMessage} ${message}`)

            // let app keep running but indicate failure 

            return of(userMessage)
        }
     }

     private showProgress(message: string) {
        this.messanger.add(message)
     }
}