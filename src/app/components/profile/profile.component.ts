import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '@supabase/supabase-js';
import { JsonPipe } from '@angular/common';
import { UserService } from '../../core/services/user.service';
import { supabase } from '../../core/utils/supabase';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  authService = inject(AuthService)
  user: any
  profile: any

  constructor() {
    this.authService.getCurrentUser().subscribe(async (authUser: User | null) => {
      const { data } = await supabase.from('users').select().eq('user_uuid', authUser?.id).limit(1).single()
      this.user = data
      
      // const { data: profileData } = await supabase.from('profiles').select().eq('user_id', data?.id).limit(1).single()
      // console.log("🚀 ~ ProfileComponent ~ this.authService.getCurrentUser ~ profileData:", profileData)
      // this.profile = profileData

      console.log('this profile:', this.profile)
    })
  }
  
}
