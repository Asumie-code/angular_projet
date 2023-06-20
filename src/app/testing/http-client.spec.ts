import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


import { TestBed } from '@angular/core/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { HttpHeaders } from '@angular/common/http'


interface Data {
    name: string 
}

const testUrl = '/data'



describe('HttpClient testing' , () => {
    let httpClient: HttpClient 
    let httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ]
        })

        // inject the http servce and test controller for each test 
        httpClient = TestBed.inject(HttpClient)
        httpTestingController = TestBed.inject(HttpTestingController)
    })

    afterEach(() => {
        // after every test, assert that there are no more pending requests
        httpTestingController.verify()
    })

    // test begins 
    it('can test HttpClient.get', () => {
        const testData: Data = {name: 'Test Data'}

        // Make an Http GET request 
        httpClient.get<Data>(testUrl)
        .subscribe(data => 
                // when observable resolves, result should match test data 
                expect(data).toEqual(testData)
            )

            // the following 'expectOne()' will match the request's URL. 
            // if no requests or multiple requests matched that URL
            // 'expectOne()' would throw.

            const req = httpTestingController.expectOne('/data')

            // assert that the request is a GET 
            expect(req.request.method).toEqual('GET')

            // respond with mock data , causing Observable to resolve 
            // subscribe callback asserts that correct data was returned
            req.flush(testData)
    })


    it('can test HttpClient.get with matching header', () => {
        const testData: Data = {name: 'Test Data'}

        // make an HTTP GET request with specific header 
        httpClient.get<Data>(testUrl, {
            headers: new HttpHeaders({Authorization: 'my-auth-token'})
        }).subscribe(data => expect(data).toEqual(testData))

        // find request with a predicate function 
        // expect one request with an authorization header 
        const req  = httpTestingController.expectOne(
            request => request.headers.has('Authorization')
        )
        req.flush(testData)

    })


    it('can test multiple requests', () => {
        const testData: Data[] = [
            { name: 'bob' }, { name: 'carol' },
            { name: 'ted' }, { name: 'alice' }
          ];


          // Make three requests in a row 
          httpClient.get<Data[]>(testUrl).subscribe(d => expect(d.length).withContext('should have no data').toEqual(0))

          httpClient.get<Data[]>(testUrl).subscribe(d => expect(d).withContext('should be one element array').toEqual([testData[0]]))

          httpClient.get<Data[]>(testUrl).subscribe(d => expect(d).withContext('should be expected data').toEqual(testData))

          // get all pending requests that match the given url
          const requests = httpTestingController.match(testUrl)
          expect(requests.length).toEqual(3)


          // respond to each request with different results 
          requests[0].flush([]) 
          requests[1].flush([testData[0]])
          requests[2].flush(testData)  

    })

    it('can test for 404 error', () => {
        const emsg = 'deliberate 404 error'

        httpClient.get<Data[]>(testUrl).subscribe({
            next: () => fail('should have failed with the 404 error'), 
            error: (error: HttpErrorResponse) => {
                expect(error.status).withContext('status').toEqual(404)
                expect(error.error).withContext('message').toEqual(emsg)
            }
        })

        const req = httpTestingController.expectOne(testUrl)

        // respond with mock error
        req.flush(emsg, {status: 404, statusText: 'Not Found'})
    })

    it('can test for network error', done => {
        // create mock progressEvent with type 'error', raided when something goes wrong 
        // at network level. e.g. connectioon timeout, DNS error, offline, etc. 

        const mockError = new ProgressEvent('error')

        httpClient.get<Data[]>(testUrl).subscribe({
            next: () => fail('should have failed with the network error'), 
            error: (error: HttpErrorResponse) => {
                expect(error.error).toBe(mockError)
                done()
            }
        }) 

        const req = httpTestingController.expectOne(testUrl)

        // respond with mock error 
        req.error(mockError)
    })


    it('httpTestingController.verify shoul fail if http response not simulated', () => {
        // send request 
        httpClient.get('some/api').subscribe()
        
        // verify() should fail because haven't handled the pending request 
        expect(() => httpTestingController.verify()).toThrow()

        // now get and flush the request so that afterEach() doesn't fail 
        const req = httpTestingController.expectOne('some/api')
        req.flush(null)
    })


})