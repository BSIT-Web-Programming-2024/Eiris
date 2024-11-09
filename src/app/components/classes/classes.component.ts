import { Component, inject, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClassService } from '../../core/services/class.service';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [RouterModule, JsonPipe,],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {

  classes : any[] | null = []

  classService = inject(ClassService)
  ngOnInit() {
    this.classService.getMyClasses().then(res => {
      this.classes = res
      console.log('res:', res)
    })
  }
}
