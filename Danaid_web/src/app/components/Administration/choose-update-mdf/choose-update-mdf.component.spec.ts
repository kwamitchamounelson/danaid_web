import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUpdateMdfComponent } from './choose-update-mdf.component';

describe('ChooseUpdateMdfComponent', () => {
  let component: ChooseUpdateMdfComponent;
  let fixture: ComponentFixture<ChooseUpdateMdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseUpdateMdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUpdateMdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
