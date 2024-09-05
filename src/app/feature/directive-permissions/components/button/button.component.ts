import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    class: 'border border-blue-700 bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white font-semibold transition-colors duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
