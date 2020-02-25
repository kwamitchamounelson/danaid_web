import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacturationComponent } from './update-facturation.component';

describe('UpdateFacturationComponent', () => {
  let component: UpdateFacturationComponent;
  let fixture: ComponentFixture<UpdateFacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
