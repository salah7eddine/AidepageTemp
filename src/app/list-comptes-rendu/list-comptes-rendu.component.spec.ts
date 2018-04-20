import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComptesRenduComponent } from './list-comptes-rendu.component';

describe('ListComptesRenduComponent', () => {
  let component: ListComptesRenduComponent;
  let fixture: ComponentFixture<ListComptesRenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComptesRenduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComptesRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
