import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlBComponent } from './sl-b.component';

describe('SlBComponent', () => {
  let component: SlBComponent;
  let fixture: ComponentFixture<SlBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SlBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
