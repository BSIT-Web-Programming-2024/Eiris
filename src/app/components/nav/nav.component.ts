import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import  { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  authService = inject(AuthService)

  logout() {
    this.authService.signOut()
    console.log('redirect to login')  
  }
}
