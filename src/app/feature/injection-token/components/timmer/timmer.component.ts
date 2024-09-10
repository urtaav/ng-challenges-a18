import { Component, inject } from '@angular/core';
import { TIMER } from '../../data/data';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-timmer',
  standalone: true,
  imports: [],
  template: `Timer running {{ timer() }} `
})
export class TimmerComponent {
  callTimer = inject(TIMER);
  timer = toSignal(interval(this.callTimer));
}
