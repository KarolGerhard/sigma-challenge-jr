import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPresidentesComponent } from './lista-presidentes.component';

describe('ListaPresidentesComponent', () => {
  let component: ListaPresidentesComponent;
  let fixture: ComponentFixture<ListaPresidentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPresidentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPresidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
