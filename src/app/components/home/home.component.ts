import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseService } from '../../core/services/base.service';
import { JsonPipe } from '@angular/common';
import { ClassService } from '../../core/services/class.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  classes: any[] | null = []
  classService = inject(ClassService)

  ngOnInit() {
    this.classService.getMyClasses().then((res : any) => {
      this.classes = res
      console.log('res my classes:', res)
    })
  }
}
