import { Injectable } from "@angular/core";

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { AuthService } from "../auth.service";




@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // get the auth token from the service 
        const authToken = this.auth.getAuthorizationToken()


        /*
        * The verbose way:
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
          headers: req.headers.set('Authorization', authToken)
        });
        */

        // clone the request and set the new header in one step 
        const authReq = req.clone({setHeaders: {Authorization: authToken}})


        return next.handle(authReq)
    }
}