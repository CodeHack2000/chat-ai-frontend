import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldIconComponent } from './text-field-icon.component';

describe('TextFieldIconComponent', () => {
  let component: TextFieldIconComponent;
  let fixture: ComponentFixture<TextFieldIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
