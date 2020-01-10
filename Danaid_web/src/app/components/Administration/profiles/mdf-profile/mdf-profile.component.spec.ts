import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfProfileComponent } from './mdf-profile.component';

describe('MdfProfileComponent', () => {
  let component: MdfProfileComponent;
  let fixture: ComponentFixture<MdfProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
