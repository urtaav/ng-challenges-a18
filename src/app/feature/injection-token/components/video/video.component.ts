import { Component } from '@angular/core';
import { TimmerContainerComponent } from '../timmer-container/timmer-container.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [TimmerContainerComponent],
  template: `<div class="flex gap-2">
      Video Call Timer:
      <p class="italic">(should be the default 1000s)</p>
    </div>
    <app-timmer-container />`,
})
export class VideoComponent {

}
