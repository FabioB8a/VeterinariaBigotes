import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetModalComponent } from './vet-modal.component';

describe('VetModalComponent', () => {
  let component: VetModalComponent;
  let fixture: ComponentFixture<VetModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetModalComponent]
    });
    fixture = TestBed.createComponent(VetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
