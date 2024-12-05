import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubmitButtonComponent } from './main-submit-button.component';

describe('MainSubmitButtonComponent', () => {
  let component: MainSubmitButtonComponent;
  let fixture: ComponentFixture<MainSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSubmitButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
