import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { createClient } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  student_id = 1
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

  constructor() { }

  async getMySubjects() {
    const { data, error } = await this.supabase
      .from('subjects')
      .select('*')   

      return data
  }

  async getMyClases() {
    const { data , error } = await this.supabase.from('class_enrollees').select('* , classes( id , subject(name)) ').eq('student_id', this.student_id )

    return data
  }
}