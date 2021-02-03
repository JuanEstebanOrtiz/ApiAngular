import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VconversionComponent } from './vconversion.component';

describe('VconversionComponent', () => {
  let component: VconversionComponent;
  let fixture: ComponentFixture<VconversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VconversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
