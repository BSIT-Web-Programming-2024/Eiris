import { Component, inject, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent implements OnInit {
  exams: any | null   = []

  baseService = inject(BaseService)


  ngOnInit(): void {
   
    this.baseService.getMyExams().then((exams) => {
      this.exams = exams
    })
   
  }
}
