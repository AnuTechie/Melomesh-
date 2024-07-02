import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VijayantonyComponent } from './vijayantony.component';

describe('VijayantonyComponent', () => {
  let component: VijayantonyComponent;
  let fixture: ComponentFixture<VijayantonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VijayantonyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VijayantonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
