import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";


// the JsonParser class acts as a base class for custom parsers and as the DI token 


@Injectable() 
export abstract class JsonParser {
    abstract parse(text: string): any
}


@Injectable() 
export class CustomJsonInterceptor implements HttpInterceptor {
    constructor(private jsonParser: JsonParser) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.responseType === 'json') {
            // if the expected response type is json then handle it here 
            return this.handleJsonResponse(req, next)
        } else {
            return next.handle(req)
        }
    }

    private handleJsonResponse(httpRequest: HttpRequest<any>, next: HttpHandler) {
        // override the responseType to disable the default JSON parsing 
        httpRequest = httpRequest.clone({responseType: 'text'})

        return next.handle(httpRequest).pipe(map(event => this.parseJsonResponse(event)))
    }

    private parseJsonResponse(event: HttpEvent<any>) {
        if( event instanceof HttpResponse && typeof event.body === 'string') {
            return event.clone({body: this.jsonParser.parse(event.body)})
        } else {
            return event
        }
    }
}


@Injectable()
export class CustomJsonParser implements JsonParser {
  parse(text: string): any {
    return JSON.parse(text, dateReviver);
  }
}

function dateReviver(key: string, value: any) {
  if (typeof value !== 'string') {
    return value;
  }
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(value);
  if (!match) {
    return value;
  }
  return new Date(+match[1], +match[2] - 1, +match[3]);
}

