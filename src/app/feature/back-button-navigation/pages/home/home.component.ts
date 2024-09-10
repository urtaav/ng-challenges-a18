import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="flex gap-2">
      <a class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors" routerLink="/back-button-navigation/simple-action">
        Go to simple dialog action page
      </a>
      <a class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"  routerLink="/back-button-navigation/sensitive-action">
        Go to sensitive dialog action page
      </a>
  </div>
  `,
  styles: ``
})
export class HomeComponent {

}
