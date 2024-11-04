import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { createClient } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  student_id = 1
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

  sections = [
    { title: 'Classes', link: 'classes' },
    { title: 'Grades', link: 'grades' },
    { title: 'Exams', link: 'exams' },
    { title: 'Quizzes', link: 'quizzes' }
  ]

  constructor() { }

  async getMySubjects() {
    const { data, error } = await this.supabase
      .from('subjects')
      .select('*')

    return data
  }

  async getMyClases() {
    const { data, error } = await this.supabase.from('class_enrollees').select('* , classes( id , subject(id, name)) ').eq('student_id', this.student_id)

    return data
  }
  

  async getClass(id: string | null) {
    const { data, error } = await this.supabase
      .from('classes')
      .select('*, subject(name), teacher(firstname, lastname)')
      .eq('id', id).maybeSingle()

    return data
  }


  async getMyExams() {
    const { data, error } = await this.supabase
      .from('class_exam_students')
      .select(`score, exam:class_exams(date, total:total_score, details:exams(name), period:periods!inner(name))) `)
      
    if (error) {
      console.error('Error fetching user class exams:', error);
      return;
    }

    console.log('User Class Exams:', data);

    return data
  }
}