import { Component, inject, OnInit } from '@angular/core';
import { ClassService } from '../../core/services/class.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {

  classService = inject(ClassService)
  route = inject(ActivatedRoute)

  classStudents: any[] = []

  ngOnInit() {
    console.log('oninit get classenrolees')
    this.getClassEnrollees()
  }

  async getClassEnrollees() {
    const id = this.route.snapshot.paramMap.get('id')
    const data = await this.classService.getClassEnrollees(Number(id))

    // get students
    console.log('class students:', data)
    this.classStudents = data!.sort(function (a, b) {
      return a.users.lastname.localeCompare(b.users.lastname)
    })
  }
}
