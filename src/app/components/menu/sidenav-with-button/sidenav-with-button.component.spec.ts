import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWithButtonComponent } from './sidenav-with-button.component';

describe('SidenavWithButtonComponent', () => {
  let component: SidenavWithButtonComponent;
  let fixture: ComponentFixture<SidenavWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavWithButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
