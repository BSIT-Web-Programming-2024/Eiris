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


const dashboardRoutes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'classes',
    component: ClassesComponent
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
  }
]

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [authGuard], 
    
    children: dashboardRoutes },
];

