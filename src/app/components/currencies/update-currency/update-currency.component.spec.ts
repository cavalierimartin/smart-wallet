import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { CurrencyService } from 'src/app/services/currency.service';

import { UpdateCurrencyComponent } from './update-currency.component';

describe('UpdateCurrencyComponent', () => {
  let component: UpdateCurrencyComponent;
  let fixture: ComponentFixture<UpdateCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const http = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    const commonService = new CommonService();
    const currencyService = new CurrencyService(http, commonService);
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });

  it('should get the currency by Id', () => {
    const currencyId = 1;
    // spyOn()
  })
});
