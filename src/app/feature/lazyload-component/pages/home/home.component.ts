import { Component } from '@angular/core';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { TopComponent } from '../../components/top/top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaceholderComponent,TopComponent],
  template: `
    <div class="h-screen bg-gray-500">
      @defer (on interaction(trigger)) {
        <app-top/>
      }@placeholder {
        <app-placeholder/>
    <div class="flex justify-center items-center ">
    <button #trigger
        class="rounded-sm border border-blue-500 bg-blue-300 p-2">
          Load Top
        </button>
    </div>
      }
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
