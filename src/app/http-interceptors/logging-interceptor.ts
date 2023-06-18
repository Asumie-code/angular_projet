import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";


import { Observable, finalize, tap } from "rxjs";
import { MessageService } from "../message.service";


@Injectable() 
export class LoggingInterceptor implements HttpInterceptor {
    constructor(private messenger: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now() 
        let ok: string 

        // extend server response observable with logging 

        return next.handle(req).pipe(
            tap({
                // succeeds when there is a resposne; ignore other events
                next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
                // operation failed; error is an httpErrorResponse
                error: (error) => (ok = 'failed')
            }),
            finalize(() => {
                const elapsed = Date.now() - started
                const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`
                this.messenger.add(msg)
            })
        )
    }
}