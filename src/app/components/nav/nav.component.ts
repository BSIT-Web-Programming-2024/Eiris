import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
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
  router = inject(Router)

  async logout() {
    await this.authService.signOut()
    this.router.navigate(['/login'])
  }
}
