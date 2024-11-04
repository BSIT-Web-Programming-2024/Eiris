import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../core/services/supabase.service';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BaseService } from '../../core/services/base.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loading = false

  baseService = inject(BaseService)
  router = inject(Router)

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder,
  ) {}


  async login(event: any) {
    event.preventDefault()
    const userId = '111'

    console.log('userid:', userId)

    this.router.navigate(['/dashboard'])

    return

    const supaClient = this.baseService.supabase

    const response = await supaClient.functions.invoke('get-auth-email', {
      body: { userId }
    })

    console.log('response:', response)
    const { data, error } = await supaClient.auth.signInWithPassword({
      email: response.data.email,
      password: 'testtest'
    })

    console.log('data:', data)

     this.router.navigate(['dashboard/home'])
  }
}


