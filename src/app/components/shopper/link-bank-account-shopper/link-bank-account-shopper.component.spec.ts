import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBankAccountShopperComponent } from './link-bank-account-shopper.component';

describe('LinkBankAccountShopperComponent', () => {
  let component: LinkBankAccountShopperComponent;
  let fixture: ComponentFixture<LinkBankAccountShopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkBankAccountShopperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkBankAccountShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
