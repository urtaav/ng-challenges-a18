import { Component, inject, Injector } from '@angular/core';
import { TimmerComponent } from '../timmer/timmer.component';
import { TIMER } from '../../data/data';
import { ApiService } from '../../services/api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-timmer-container',
  standalone: true,
  imports: [TimmerComponent],
  template: `
    <div class="flex gap-2">
      Timmer container:
      <p class="font-bold">(timmer is {{timer}}s)</p>
    </div>
    <div class="flex flex-col  space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs">

      @for (item of data(); track $index) {
        <div class="p-2 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">{{$index}} -> {{item.name}} - {{item.email}}</div>
        
      }
    </div>
    <app-timmer/>
  `,
  styles: ``
})
export class TimmerContainerComponent {
  timer = inject(TIMER);
  private apiService = inject(ApiService);
  
  data = toSignal(this.apiService.getData(), { initialValue: [] })

}
