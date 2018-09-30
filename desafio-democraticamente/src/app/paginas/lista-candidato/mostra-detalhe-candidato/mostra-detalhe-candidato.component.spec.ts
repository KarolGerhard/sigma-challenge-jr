import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraDetalheCandidatoComponent } from './mostra-detalhe-candidato.component';

describe('MostraDetalheCandidatoComponent', () => {
  let component: MostraDetalheCandidatoComponent;
  let fixture: ComponentFixture<MostraDetalheCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraDetalheCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraDetalheCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
