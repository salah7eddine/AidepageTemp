import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesComptesRenduComponent } from './list-mes-comptes-rendu.component';

describe('ListMesComptesRenduComponent', () => {
  let component: ListMesComptesRenduComponent;
  let fixture: ComponentFixture<ListMesComptesRenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMesComptesRenduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMesComptesRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
