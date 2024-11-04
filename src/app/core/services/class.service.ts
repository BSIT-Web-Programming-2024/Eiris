import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { createClient } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

  constructor() {

  }

  async getClassQuizzes(classId: number) {
    const { data, error } = await this.supabase.from('class_quizzes').select('* , quizzes(name, total)').eq('id', classId).eq('period_id', 1)
    return data
  }
}
