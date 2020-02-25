import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentFacturationProfilComponent } from './adherent-facturation-profil.component';

describe('AdherentFacturationProfilComponent', () => {
  let component: AdherentFacturationProfilComponent;
  let fixture: ComponentFixture<AdherentFacturationProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentFacturationProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentFacturationProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
