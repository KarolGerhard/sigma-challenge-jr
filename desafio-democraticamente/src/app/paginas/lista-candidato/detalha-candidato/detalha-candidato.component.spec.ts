import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaCandidatoComponent } from './detalha-candidato.component';

describe('DetalhaCandidatoComponent', () => {
  let component: DetalhaCandidatoComponent;
  let fixture: ComponentFixture<DetalhaCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhaCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
