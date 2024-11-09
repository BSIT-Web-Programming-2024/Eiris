import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { RouterModule } from '@angular/router';
import { ProfileComponent } from "../../components/profile/profile.component";
import { NavControlsComponent } from "../../components/nav-controls/nav-controls.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, RouterModule, ProfileComponent, NavControlsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userId = 2

 
}
