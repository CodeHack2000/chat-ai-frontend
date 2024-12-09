import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableDiaglogComponent } from './scrollable-diaglog.component';

describe('ScrollableDiaglogComponent', () => {
  let component: ScrollableDiaglogComponent;
  let fixture: ComponentFixture<ScrollableDiaglogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableDiaglogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableDiaglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
