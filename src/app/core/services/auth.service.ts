import { supabase } from './../utils/supabase'
import { Router } from '@angular/router'
import { Injectable, inject } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router)
  private currentUser: BehaviorSubject<User | boolean> = new BehaviorSubject<User | boolean>(false)

  constructor() {
    supabase.auth.onAuthStateChange((event, session) => {
      this.currentUser.next(session?.user ?? false)
    })
  }

  async login(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    })
  }

  async loadUser() {
    if (this.currentUser.value) {
      // User is already set, no need to do anything else
      return
    }
    const user = await supabase.auth.getUser()

    if (user.data.user) {
      this.currentUser.next(user.data.user)
    } else {
      this.currentUser.next(false)
    }
  }

  async signOut() {
    await supabase.auth.signOut()
    this.router.navigateByUrl('/', { replaceUrl: true })
  }


  getCurrentUser(): Observable<User | boolean> {
    return this.currentUser.asObservable()
  }

  getCurrentUserId(): string {
    if (this.currentUser.value) {
      return (this.currentUser.value as User).id
    } else {
      return ''
    }
  }

  signUp(credentials: { email: string; password: string }) {
    return supabase.auth.signUp(credentials)
  }

  sendPasswordReset(email: string) {
    return supabase.auth.resetPasswordForEmail(email)
  }
}
