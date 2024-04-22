import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaconCheeseburgerComponent } from './bacon-cheeseburger.component';

describe('BaconCheeseburgerComponent', () => {
  let component: BaconCheeseburgerComponent;
  let fixture: ComponentFixture<BaconCheeseburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaconCheeseburgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaconCheeseburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
