import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUpdatedComponent } from './profil-updated.component';

describe('ProfilUpdatedComponent', () => {
  let component: ProfilUpdatedComponent;
  let fixture: ComponentFixture<ProfilUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
