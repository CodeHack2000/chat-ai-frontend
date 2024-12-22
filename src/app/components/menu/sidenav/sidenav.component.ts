import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { NavMenuButtonComponent } from "../../buttons/nav-menu-button/nav-menu-button.component";
import { AuthService } from '../../../services/auth.service';
import { UserCardComponent } from "../../cards/user-card/user-card.component";
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    NavMenuButtonComponent,
    UserCardComponent
],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  authService = inject(AuthService);
  router = inject(Router);
  snackbarService = inject(SnackbarService);

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer(): void {
    this.drawer.toggle();
  }

  logout(): void {
    this.authService.logout().subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/login']);
        this.snackbarService.openSnackBar('Logout efetuado com sucesso!', 1);
      }
    });
  }
}
