import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatWebComponent } from './cat-web.component';

describe('CatWebComponent', () => {
  let component: CatWebComponent;
  let fixture: ComponentFixture<CatWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
