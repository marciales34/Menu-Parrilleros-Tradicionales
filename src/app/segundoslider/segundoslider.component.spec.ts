import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundosliderComponent } from './segundoslider.component';

describe('SegundosliderComponent', () => {
  let component: SegundosliderComponent;
  let fixture: ComponentFixture<SegundosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundosliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
