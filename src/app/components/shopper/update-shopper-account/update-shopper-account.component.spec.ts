import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShopperAccountComponent } from './update-shopper-account.component';

describe('UpdateShopperAccountComponent', () => {
  let component: UpdateShopperAccountComponent;
  let fixture: ComponentFixture<UpdateShopperAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateShopperAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateShopperAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
