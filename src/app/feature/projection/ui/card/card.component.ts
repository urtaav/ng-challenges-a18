import { Component, inject, input } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { CardType } from '../../model/card.model';
import { TeacherStore } from '../../data-access/teacher.store';
import { StudentStore } from '../../data-access/student.store';
import { randomCity, randStudent, randTeacher } from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ListItemComponent],
  template: `

  <div class="p-4 bg-blue-100 rounded-lg shadow-md">
  @if (type() ===  CardType.TEACHER) {
    <h3 class="text-xl font-semibold mb-2">Teacher</h3>
  }
  @if (type() ===  CardType.STUDENT) {
    <h3 class="text-xl font-semibold mb-2">Student</h3>
  }
  @if (type() ===  CardType.CITY) {
    <h3 class="text-xl font-semibold mb-2">City</h3>
  }
    <section>
    <ul class="list-disc pl-5 mb-4">

      @for (item of list(); track $index) {
        <app-list-item
          [id]="item.id"
          [name]="type() ===  CardType.CITY ? item.name :  item.firstName"
          [type]="type()"
        />
      } 
      </ul>
    </section>
      <button
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        (click)="addNewItem()">
        Add
      </button>
  </div>
  `
})
export class CardComponent {

  private teacherStore = inject(TeacherStore);
  private studentStore = inject(StudentStore);
  private cityStore = inject(CityStore);

  list = input.required<any[] | null>();
  type = input.required<CardType>();
  customClass = input.required<string>();

  CardType = CardType;

  addNewItem = () => {
    if (this.type() === CardType.TEACHER) {
      this.teacherStore.addOne(randTeacher());
    } else if (this.type() === CardType.STUDENT) {
      this.studentStore.addOne(randStudent());
    } else {
      this.cityStore.addOne(randomCity());
    }
  }

}
