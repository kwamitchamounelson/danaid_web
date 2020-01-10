import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentProfileComponent } from './adherent-profile.component';

describe('AdherentProfileComponent', () => {
  let component: AdherentProfileComponent;
  let fixture: ComponentFixture<AdherentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
