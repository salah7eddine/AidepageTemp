import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauChantierComponent } from './nouveau-chantier.component';

describe('NouveauChantierComponent', () => {
  let component: NouveauChantierComponent;
  let fixture: ComponentFixture<NouveauChantierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauChantierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
