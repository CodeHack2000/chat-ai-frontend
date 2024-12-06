import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotMessageTextComponent } from './bot-message-text.component';

describe('BotMessageTextComponent', () => {
  let component: BotMessageTextComponent;
  let fixture: ComponentFixture<BotMessageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotMessageTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotMessageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
