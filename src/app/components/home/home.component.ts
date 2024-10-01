import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sections = [
    { title: 'Classes', link: 'classes' },
    { title: 'Grades', link: 'grades' },
    { title: 'Exams', link: 'exams' },
    { title: 'Quizzes', link: 'quizzes' }
  ]
}
