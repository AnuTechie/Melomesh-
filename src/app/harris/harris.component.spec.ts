import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrisComponent } from './harris.component';

describe('HarrisComponent', () => {
  let component: HarrisComponent;
  let fixture: ComponentFixture<HarrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HarrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
