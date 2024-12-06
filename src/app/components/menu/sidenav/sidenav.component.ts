import { Component, ViewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NavMenuButtonComponent } from "../../buttons/nav-menu-button/nav-menu-button.component";

@Component({
  selector: 'app-sidenav',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    NavMenuButtonComponent
],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer(): void {
    this.drawer.toggle();
  }
}
