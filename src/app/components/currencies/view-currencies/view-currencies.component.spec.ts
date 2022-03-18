import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrenciesComponent } from './view-currencies.component';

describe('ViewCurrenciesComponent', () => {
  let component: ViewCurrenciesComponent;
  let fixture: ComponentFixture<ViewCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
