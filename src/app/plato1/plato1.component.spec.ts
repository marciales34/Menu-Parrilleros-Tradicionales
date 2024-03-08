import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plato1Component } from './plato1.component';

describe('Plato1Component', () => {
  let component: Plato1Component;
  let fixture: ComponentFixture<Plato1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plato1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Plato1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
