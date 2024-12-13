import { Component } from '@angular/core';
import { SecondaryTitleComponent } from "../../titles/secondary-title/secondary-title.component";
import { SidenavWithButtonComponent } from "../../menu/sidenav-with-button/sidenav-with-button.component";

@Component({
  selector: 'app-main-header',
  imports: [SecondaryTitleComponent, SidenavWithButtonComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

}
