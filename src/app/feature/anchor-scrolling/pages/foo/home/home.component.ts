import { Component } from '@angular/core';
import { NavButtonComponent } from '../../../components/nav-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavButtonComponent],
  template: `
    Welcome to foo page
    <nav-button href="/anchor-scrolling" class="fixed top-3 left-1/2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">Home Page</nav-button>

    <div class="h-screen flex items-center justify-center bg-green-300 text-2xl p-4">Section 1</div>

    <div class="h-screen flex items-center justify-center bg-yellow-400 text-2xl p-4">Section 2</div>
  `,
})
export class HomeComponent {

}
