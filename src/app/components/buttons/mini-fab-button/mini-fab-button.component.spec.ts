import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFabButtonComponent } from './mini-fab-button.component';

describe('MiniFabButtonComponent', () => {
  let component: MiniFabButtonComponent;
  let fixture: ComponentFixture<MiniFabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniFabButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
