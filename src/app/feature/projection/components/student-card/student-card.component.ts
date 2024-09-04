import { Component, inject, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { Student } from '../../model/student.model';
import { CardType } from '../../model/card.model';
import { StudentStore } from '../../data-access/student.store';
import { FakeHttpService } from '../../data-access/fake-http.service';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CardComponent],
  template: `
      <app-card
      [list]="students()"
      [type]="cardType"
      customClass="bg-light-green"></app-card>
  
  `,
  styles: [
    `
        ::ng-deep .bg-light-green {
          background-color: rgba(0, 250, 0, 0.1);
        }
      `,
  ],
})
export class StudentCardComponent implements OnInit {

  private store: StudentStore = inject(StudentStore);
  private http: FakeHttpService = inject(FakeHttpService);

  students = signal<Student[]>([]);
  cardType = CardType.STUDENT;

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
    this.store.students$.subscribe((s) => (this.students.set(s)));
  }

}
