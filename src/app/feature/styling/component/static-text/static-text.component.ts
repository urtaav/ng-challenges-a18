import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

export type StaticTextType = 'normal' | 'warning' | 'error';

@Component({
  selector: 'app-static-text',
  standalone: true,
  imports: [TextComponent],
  template: `<text>
            This is a static text
             <p>Parrafo text</p>
             <h1>h1 titulo</h1>
             <h2 class="nested-child">h2 subtitle</h2>
            </text> `,
  styles: `
      text {
        --text-font-size: 15px;
        --text-color: pink;
      }

      // Esto significa que si cualquier ancestro del componente tiene la clase .error,
      //  entonces los estilos dentro de :host-context(.error) se aplicarán al componente.
      :host-context(.error) {
        text {
          --text-font-size: 30px;
          --text-color: red;
        }
      }

      :host-context(.warning) {
        text {
          --text-font-size: 25px;
          --text-color: orange;
        }
      }

      :host-context(.dark-theme) {
        h1, h2, span ,p{
          background-color: black;
          color: white;
          border-bottom: 1px solid;
          margin-bottom:4px;
          padding:5px;
        }
      }

      ::ng-deep .nested-child {
        color: #07ff97;
      }

  
  `
})
export class StaticTextComponent {

}
