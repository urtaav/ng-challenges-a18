import { Component } from '@angular/core';
import { fadeInAnimation, staggerAnimation } from '../../animations/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  animations: [fadeInAnimation, staggerAnimation],
  template: `
  <div class="mx-20 my-40 flex gap-5">
    <section class="bg-gray-200 p-6 rounded-lg shadow-md" @fadeInAnimation>
        <div>
          <h3 class="text-2xl font-bold">2008</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>
      <section class="bg-white p-6 m-3 rounded-lg shadow-md" @staggerAnimation>
        @for (item of list; track $index) {
          <div class="list-item mb-2 p-4">
            <span class="font-semibold">{{ item.key }}: </span>
            <span>{{ item.value }}</span>
          </div>
        }
      </section>
  </div>
  `,
  styles: ``
})
export class HomeComponent {
  readonly list: { key: string; value: string }[] = [
    { key: 'Name', value: 'Samuel' },
    { key: 'Age', value: '28' },
    { key: 'Birthdate', value: 'City' },
    { key: 'Language', value: 'English' },
    { key: 'Like Pizza', value: 'Hell yeah' },
  ];
}
