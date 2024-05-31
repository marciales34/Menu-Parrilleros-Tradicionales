import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBebidasComponent } from './slider-bebidas.component';

describe('SliderBebidasComponent', () => {
  let component: SliderBebidasComponent;
  let fixture: ComponentFixture<SliderBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderBebidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
