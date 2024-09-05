import { Component } from '@angular/core';

@Component({
  selector: 'text',
  standalone: true,
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: `
      p {
        font-size: var(--text-font-size, 15px);
        color: var(--text-color, #15b0b7);
        font-weight: 700;
      }
  `
})
export class TextComponent {

}
