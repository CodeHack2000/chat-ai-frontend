import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeImageComponent } from './change-image.component';

describe('ChangeImageComponent', () => {
  let component: ChangeImageComponent;
  let fixture: ComponentFixture<ChangeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
