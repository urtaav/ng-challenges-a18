import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { Teacher } from '../../model/teacher.model';
import { CardType } from '../../model/card.model';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';

@Component({
  selector: 'app-teacher-card',
  standalone: true,
  imports: [CardComponent],
  template: `
    <app-card
      [list]="teachers()"
      [type]="cardType"
      customClass="bg-light-red"></app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TeacherCardComponent implements OnInit {
  private http: FakeHttpService = inject(FakeHttpService);
  private store: TeacherStore = inject(TeacherStore);

  teachers = signal<Teacher[]>([]);
  cardType = CardType.TEACHER;



  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));

    this.store.teachers$.subscribe((t) => (this.teachers.set(t)));
  }
}
