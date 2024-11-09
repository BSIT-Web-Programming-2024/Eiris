import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { supabase } from '../utils/supabase';
import { User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authService = inject(AuthService)

  getCurrentUser() {
    
  }

  getProfile() {

  }
}
