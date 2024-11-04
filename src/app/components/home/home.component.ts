import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseService } from '../../core/services/base.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  classes: any[] | null = []
  baseService = inject(BaseService)

  ngOnInit() {
    this.baseService.getMyClases().then((res : any) => {
      this.classes = res
      console.log('res:', res)
    })
  }
}
