import { Component, signal, ViewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-sidenav-with-button',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    SidenavComponent
],
  templateUrl: './sidenav-with-button.component.html',
  styleUrl: './sidenav-with-button.component.scss'
})
export class SidenavWithButtonComponent {

  @ViewChild('sidenav') sidenav!: SidenavComponent;

  icon = signal('menu');
  isNavOpen = signal(false);

  toggleSidenav() {
    this.sidenav.toggleDrawer();
    this.isNavOpen.set(!this.isNavOpen());
    if (this.icon() === 'menu') {
      this.icon.set('keyboard_double_arrow_left');
    }
    else {
      this.icon.set('menu');
    }
  }
}
