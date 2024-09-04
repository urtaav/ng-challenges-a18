import { Component } from '@angular/core';
import { TeacherCardComponent } from '../../components/teacher-card/teacher-card.component';
import { StudentCardComponent } from '../../components/student-card/student-card.component';
import { CityCardComponent } from '../../components/city-card/city-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TeacherCardComponent,StudentCardComponent,CityCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
