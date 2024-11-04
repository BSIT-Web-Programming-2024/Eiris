import { Component, inject, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [RouterModule, JsonPipe,],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {

  classes : any[] | null = []

  baseService = inject(BaseService)


  ngOnInit() {
    this.baseService.getMyClases().then(res => {
      this.classes = res
      console.log('res:', res)
    })
  }
}
