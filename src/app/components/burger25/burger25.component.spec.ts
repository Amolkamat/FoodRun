import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burger25Component } from './burger25.component';

describe('Burger25Component', () => {
  let component: Burger25Component;
  let fixture: ComponentFixture<Burger25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Burger25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Burger25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
