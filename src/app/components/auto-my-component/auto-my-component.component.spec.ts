import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMyComponentComponent } from './auto-my-component.component';

describe('AutoMyComponentComponent', () => {
  let component: AutoMyComponentComponent;
  let fixture: ComponentFixture<AutoMyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMyComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoMyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
