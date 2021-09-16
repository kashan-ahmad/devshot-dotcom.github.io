import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMobileComponent } from './cat-mobile.component';

describe('CatMobileComponent', () => {
  let component: CatMobileComponent;
  let fixture: ComponentFixture<CatMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
