import { Component, inject, input } from '@angular/core';
import { CardType } from '../../model/card.model';
import { TeacherStore } from '../../data-access/teacher.store';
import { StudentStore } from '../../data-access/student.store';
import { CityStore } from '../../data-access/city.store';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  template: `

    <li class="border-grey-300 flex justify-between border px-2 py-1">  
         {{ name() }}       
        <button (click)="delete(id())">
        <img class="h-5" src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" />
      </button>
    </li>

  `
})
export class ListItemComponent {

  private teacherStore = inject(TeacherStore);
  private studentStore = inject(StudentStore);
  private cityStore = inject(CityStore);

  id = input.required<number>();
  name = input.required<string>();
  type = input.required<CardType>();

  delete = (id: number) => {
    if (this.type() === CardType.TEACHER) {
      this.teacherStore.deleteOne(id);
    } else if (this.type() === CardType.STUDENT) {
      this.studentStore.deleteOne(id);
    } else {
      this.cityStore.deleteOne(id);
    }
  }
}
