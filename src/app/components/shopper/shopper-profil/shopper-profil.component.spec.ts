import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperProfilComponent } from './shopper-profil.component';

describe('ShopperProfilComponent', () => {
  let component: ShopperProfilComponent;
  let fixture: ComponentFixture<ShopperProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopperProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopperProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
