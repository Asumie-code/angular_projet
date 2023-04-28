import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelSlComponent } from './top-level-sl.component';

describe('TopLevelSlComponent', () => {
  let component: TopLevelSlComponent;
  let fixture: ComponentFixture<TopLevelSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopLevelSlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLevelSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
