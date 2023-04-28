import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlBSubComponent } from './sl-b-sub.component';

describe('SlBSubComponent', () => {
  let component: SlBSubComponent;
  let fixture: ComponentFixture<SlBSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SlBSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlBSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
