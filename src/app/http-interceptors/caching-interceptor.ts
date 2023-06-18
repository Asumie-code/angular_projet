import { Injectable } from "@angular/core";
import { HttpEvent, HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { startWith, tap } from "rxjs/operators";

import { RequestCache } from "../request-cache.service";
import { searchUrl } from "../package-search/package-search.service";




/**
 * If request is cacheable (e.g., package search) and
 * response is in cache return the cached response as observable.
 * If has 'x-refresh' header that is true,
 * then also re-run the package search, using response from next(),
 * returning an observable that emits the cached response first.
 *
 * If not in cache or not cacheable,
 * pass request through to next()
 */


@Injectable() 
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCache) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // continue if not cacheable 
        if(!isCacheable(req)) return next.handle(req)

        const cachedResponse = this.cache.get(req)

        // cache-then-refresh 
        if(req.headers.get('x-referesh')) {
            const results$ = sendRequest(req, next, this.cache)
            return cachedResponse ? results$.pipe( startWith(cachedResponse) ) : results$
        }

        // cache or fetch 
        return cachedResponse ? of(cachedResponse) : sendRequest(req, next, this.cache)
    }
}



function isCacheable(req: HttpRequest<any>) {
    // only get requets are cacheable 
    return req.method === 'GET' && -1 < req.url.indexOf(searchUrl)
}


// get server response observable by sending request to `next()`
// will ad the resposne to the cache on the way out 

function sendRequest(
    req: HttpRequest<any>, 
    next: HttpHandler, 
    cache: RequestCache
): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        tap(event => {
            // there may be other events besides the response 
            if( event instanceof HttpResponse) {
                cache.put(req, event) // update the cache
            }
        })
    )
}