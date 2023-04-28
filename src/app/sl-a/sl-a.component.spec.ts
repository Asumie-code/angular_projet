import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlAComponent } from './sl-a.component';

describe('SlAComponent', () => {
  let component: SlAComponent;
  let fixture: ComponentFixture<SlAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SlAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
