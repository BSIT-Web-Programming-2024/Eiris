import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { createClient } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  student_id = 1

  supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

  async getClassQuizzes(classId: number) {
    const { data, error } = await this.supabase.from('class_quizzes').select('* , quizzes(name, total)').eq('id', classId).eq('period_id', 1)
    return data
  }

  async getMyQuizzes(classId: number, studentId: number) {
    const { data } = await this.supabase.from('class_quiz_students').select('*').eq('student_id', studentId).eq('class_id', classId)
    console.log('Debug my quizzes', data)
   
    return data
  }

  async getClassDetails(classId: number) {
    const { data } = await this.supabase.from('classes').select('*, subject(*), teacher(*)'  ).eq('id', classId).limit(1).single()
    return data
  }

  async getMyClasses() {
    const { data, error } = await this.supabase.from('class_enrollees').select('* , classes( id , subject(name)) ').eq('student_id', this.student_id)
      console.log('my classes:',data)
    return data
  }

  async getClassEnrollees(classId:number) {
    console.log('class id:', classId)
    const { data, error } = await this.supabase.from('class_enrollees').select('*, users( * )').eq('class_id', classId)
      console.log(' class enrollees:',data)
    return data
  }
  
}
