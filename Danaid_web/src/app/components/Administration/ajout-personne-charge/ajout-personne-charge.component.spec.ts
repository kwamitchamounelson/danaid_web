import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPersonneChargeComponent } from './ajout-personne-charge.component';

describe('AjoutPersonneChargeComponent', () => {
  let component: AjoutPersonneChargeComponent;
  let fixture: ComponentFixture<AjoutPersonneChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPersonneChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPersonneChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
