import { Component, inject, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent implements OnInit {

  subjects : any[] | null = []

  ngOnInit() {
    this.getMySubjects()
  }

  baseService = inject(BaseService)

  getMySubjects() {
   this.baseService.getMySubjects().then(res => {
    this.subjects = res
   })


  //  this.baseService.getMyClases().then(res => {
  //   console.log('res get classes:", res', res)
  //  })
  }
}
