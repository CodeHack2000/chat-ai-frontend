import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotProductsComponent } from './bot-products.component';

describe('BotProductsComponent', () => {
  let component: BotProductsComponent;
  let fixture: ComponentFixture<BotProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
