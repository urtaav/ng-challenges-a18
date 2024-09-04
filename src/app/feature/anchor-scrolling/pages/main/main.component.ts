import { Component } from '@angular/core';
import { NavButtonComponent } from '../../components/nav-button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavButtonComponent],
  template: `
    <nav-button href="/anchor-scrolling/foo" class=" top-3 left-1/2">Foo Page</nav-button>
    <div id="top" class="h-screen bg-gray-500">
      Empty
      <nav-button anchor="bottom">Scroll Bottom</nav-button>
    </div>
    <div id="bottom" class="h-screen bg-blue-300">
      I want to scroll each
      <nav-button anchor="top">Scroll Top</nav-button>
    </div>
  `,
})
export class MainComponent {

}
