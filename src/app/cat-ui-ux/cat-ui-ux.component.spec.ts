import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUiUxComponent } from './cat-ui-ux.component';

describe('CatUiUxComponent', () => {
  let component: CatUiUxComponent;
  let fixture: ComponentFixture<CatUiUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatUiUxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatUiUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
