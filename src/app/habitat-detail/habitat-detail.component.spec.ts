import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatDetailComponent } from './habitat-detail.component';

describe('HabitatDetailComponent', () => {
  let component: HabitatDetailComponent;
  let fixture: ComponentFixture<HabitatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitatDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
