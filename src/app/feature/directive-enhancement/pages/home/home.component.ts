import { Component, signal } from '@angular/core';
import { randAnimal, randFirstName, randSuperhero } from '@ngneat/falso';
import { NgForEmpty } from '../../directive/ngfor-empty-directive.directive';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgForEmpty],
  template: `
  <div class="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
  <h6>Person List</h6>
  <ul class="list-disc pl-6 space-y-2">
      @for (person of persons(); track $index) {
          <li>{{person}}</li>
      } @empty {
        <p class="text-center text-gray-500 text-lg italic">The Person List is empty !!</p>
      }
    </ul>
      <h6>Animals list</h6>
    <ul class="list-disc pl-6 space-y-2 mt-4">
    <li *ngFor="let animal of animals(); empty: emptyList">
    {{animal}}
    </li>
    <ng-template #emptyList>
    <p class="text-center text-gray-500 text-lg italic">The Animal list  is empty !!</p>
    </ng-template>
  </ul>
  </div>
  <div class="mt-6 flex justify-center gap-3">
    <button (click)="clear()" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
      Clear
    </button>
    <button (click)="add()" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      Add
    </button>
  </div>
  `,
  styles: ``
})
export class HomeComponent {
  persons = signal<string[]>([]);
  animals = signal<string[]>([]);

  clear = () => {
    this.persons.set([]);
    this.animals.set([]);
  }

  add = () => {
    this.persons.update((currentValue) => [...currentValue, randFirstName()]);
    this.animals.update((currentValue) => [...currentValue, randAnimal()]);
  }
}
