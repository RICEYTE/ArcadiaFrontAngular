import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsDetailComponent } from './animals-detail.component';

describe('AnimalsDetailComponent', () => {
  let component: AnimalsDetailComponent;
  let fixture: ComponentFixture<AnimalsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
