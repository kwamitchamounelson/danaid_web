import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretataireComponent } from './pretataire.component';

describe('PretataireComponent', () => {
  let component: PretataireComponent;
  let fixture: ComponentFixture<PretataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
