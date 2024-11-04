import { Component, OnInit, inject } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { ClassService } from '../../core/services/class.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs'
import {  CommonModule } from '@angular/common';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './class.component.html',
  styleUrl: './class.component.scss'
})
export class ClassComponent implements OnInit {
  
  baseService = inject(BaseService)
  router = inject(Router)
  route = inject(ActivatedRoute)
  classService = inject(ClassService)
  loading = true

  classDetails : any
  classQuizzes: any[] = []

  ngOnInit(): void {
    console.log('class init')
    this.getClass()
    this.getClassQuizzes()
  }

   async getClass() {
    console.log('get class')
    this.loading = true
    const id = this.route.snapshot.paramMap.get('id')
    this.classDetails = await this.baseService.getClass(id)

   const data = await this.classService.getClassQuizzes(this.classDetails.id)
   console.log('data quiz:', data)
   this.classQuizzes = data || []
   console.log('class quizzes:', this.classQuizzes)
    this.loading = false
  }

  async getClassQuizzes() {
    console.log('get class quizzes', this.classDetails )
    await this.classService.getClassQuizzes(this.classDetails.id)
  }
}
