import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhistorialComponent } from './vhistorial.component';

describe('VhistorialComponent', () => {
  let component: VhistorialComponent;
  let fixture: ComponentFixture<VhistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
