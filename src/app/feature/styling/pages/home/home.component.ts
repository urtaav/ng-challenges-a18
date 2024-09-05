import { Component } from '@angular/core';
import { StaticTextComponent } from '../../component/static-text/static-text.component';
import { TextComponent } from '../../component/text/text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StaticTextComponent, TextComponent],
  template: `
    <app-static-text />
    <app-static-text class="error"/>
    <app-static-text class="warning"/>
    <app-static-text class="dark-theme"/>
    <text>This a random color text</text>
  `,
  styles: `

    :host {
      display: block;
      border: 2px solid blue;
      padding: 1rem
    }
        text {
         font-size: 1rem;
         text-color:red;
      }
  `
})
export class HomeComponent {

}
