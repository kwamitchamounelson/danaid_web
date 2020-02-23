import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntityComponent } from './data-entity.component';

describe('DataEntityComponent', () => {
  let component: DataEntityComponent;
  let fixture: ComponentFixture<DataEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
