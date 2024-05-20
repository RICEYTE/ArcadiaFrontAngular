import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireComponent } from './veterinaire.component';

describe('VeterinaireComponent', () => {
  let component: VeterinaireComponent;
  let fixture: ComponentFixture<VeterinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
