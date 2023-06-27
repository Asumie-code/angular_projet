import {

  MasterService,
    ValueService,
  
  } from './demo';
  
  import { By } from '@angular/platform-browser';
  import { Component,
           DebugElement,
           Injectable } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  
  // Forms symbols imported only for a specific test below
  import { NgModel, NgControl } from '@angular/forms';
  
  import {
    ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync
  } from '@angular/core/testing';
  

  
  export class NotProvided extends ValueService { /* example below */ }


  /// service tests /// 

  describe('ValueService', () => {
    let service: ValueService


    beforeEach(() => {
        TestBed.configureTestingModule({providers: [ValueService]})
        service = TestBed.inject(ValueService)
    })

    it('should use ValueService', () => {
        service = TestBed.inject(ValueService)
        expect(service.getValue()).toBe('real value')
    })

    it('can inject a default value when service is not provided', () => {
        expect(TestBed.inject(NotProvided, null)).toBeNull()
    })

    
    it('test should wait for ValueService.getPromiseValue', waitForAsync(() => {
        service.getPromiseValue().then(
          value => expect(value).toBe('promise value')
        );
      }));

    it('test should wait for ValueService.getObservableValue', waitForAsync(() => {
        service.getObservableValue().subscribe(
            value => expect(value).toBe('observable value')
        )
    }))

    // must use done. 
    it('test should wait for ValueService.getObservableDelayValue', (done: DoneFn) => {
        service.getObservableDelayValue().subscribe(value => {
            expect(value).toBe('observable delay value')
            done
        })
    })

    it('should allow the use of fakeAsync', fakeAsync(() => {
        let value: any
        service.getPromiseValue().then((val: any) => value = val)
        tick() // trigger js engine cycle untill all promises resolve
    }))
  })


  describe('MasterService', () => {
    let masterService: MasterService;
    let valueServiceSpy: jasmine.SpyObj<ValueService>;

    beforeEach(() => {
      const spy = jasmine.createSpyObj('ValueService', ['getValue']);

      TestBed.configureTestingModule({
        // Provide both the service-to-test and its (spy) dependency
        providers: [
          MasterService,
          { provide: ValueService, useValue: spy }
        ]
      });
      // Inject both the service-to-test and its (spy) dependency
      masterService = TestBed.inject(MasterService);
      valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
    });

    it('#getValue should return stubbed value from a spy', () => {
      const stubValue = 'stub value';
      valueServiceSpy.getValue.and.returnValue(stubValue);

      expect(masterService.getValue())
        .withContext('service returned stub value')
        .toBe(stubValue);
      expect(valueServiceSpy.getValue.calls.count())
        .withContext('spy method was called once')
        .toBe(1);
      expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
        .toBe(stubValue);
    });
  });