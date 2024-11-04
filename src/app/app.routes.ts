import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { SubjectComponent } from './components/subject/subject.component';
import { HomeComponent } from './components/home/home.component';
import { GradesComponent } from './components/grades/grades.component';
import { ExamsComponent } from './components/exams/exams.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ClassComponent } from './components/class/class.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { AttendanceComponent } from './pages/attendance/attendance.component';
const dashboardRoutes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'classes',
    component: ClassesComponent,
    children: [
      {
        path: ':id',
        component: ClassComponent
      }
    ]
  },
  {
    path: 'subjects',
    component: SubjectComponent
  },
  {

    path: 'grades',
    component: GradesComponent
  },
  {

    path: 'exams',
    component: ExamsComponent
  },
  {

    path: 'quizzes',
    component: QuizzesComponent
  },
  {

    path: 'attendance/:id',
    component: AttendanceComponent
  }
]

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],

    children: dashboardRoutes
  },
  {
    path: '**', component: NotFoundComponent
  }
];

