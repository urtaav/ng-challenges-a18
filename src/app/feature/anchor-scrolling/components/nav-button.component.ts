import { Component, input } from "@angular/core";
import { RouterLinkWithHref } from "@angular/router";

@Component({
    selector: 'nav-button',
    imports: [RouterLinkWithHref],
    standalone: true,
    template: `
    <!-- Al agregar [routerLink]="'.'", estás esencialmente indicando a Angular que, al hacer clic en el botón, se debe recargar la ruta actual.  -->
        <a [routerLink]="href()" [fragment]="anchor()">
            <ng-content/>
        </a>
    `,
    host: {
        class: 'block w-fit border-2 border-blue-500 bg-white hover:bg-gray-100 rounded-md px-6 py-3 text-sm font-medium text-blue-600 hover:text-blue-700',
    },
})
export class NavButtonComponent {
    href = input<string>('.');
    anchor = input<string | undefined>(undefined);
}