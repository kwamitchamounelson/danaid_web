import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFacturationComponent } from './all-facturation.component';

describe('AllFacturationComponent', () => {
  let component: AllFacturationComponent;
  let fixture: ComponentFixture<AllFacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
