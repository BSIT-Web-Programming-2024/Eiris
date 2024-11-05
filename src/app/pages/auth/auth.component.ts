import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BaseService } from '../../core/services/base.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loading = false

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  baseService = inject(BaseService)
  authService = inject(AuthService)
  router = inject(Router)
  toastr = inject(ToastrService)

  constructor() {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.router.navigate(['/dashboard/home'])
      }
    })
  }

  async login(event: Event) {
    const { email, password } = this.loginForm.value

    if (!email || !password) return

    const { data, error } = await this.authService.login(email, password)

    if (error) {
      this.toastr.error(error.message, '', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
      return
    }

    this.loginForm.reset()
    this.router.navigateByUrl('/dashboard/home')
  }
}


