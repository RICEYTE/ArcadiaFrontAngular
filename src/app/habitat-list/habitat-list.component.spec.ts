import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatListComponent } from './habitat-list.component';

describe('HabitatListComponent', () => {
  let component: HabitatListComponent;
  let fixture: ComponentFixture<HabitatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitatListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
