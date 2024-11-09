import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-controls',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-controls.component.html',
  styleUrl: './nav-controls.component.scss'
})
export class NavControlsComponent {

  sections = [
    {
      title: 'Dashboard',
      url: '/',
      icon: 'fi fi-br-house-chimney'
    },
    {
      title: 'My Classes',
      url: '/classes',
      icon: 'fi fi-br-book-open-reader'
    },
    {
      title: 'My Grades',
      url: '/grades',
      icon: 'fi fi-br-chart-histogram'
    },
  ]
}
