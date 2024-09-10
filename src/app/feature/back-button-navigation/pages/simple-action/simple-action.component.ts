import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { DialogService } from '../../dialog.service';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'app-simple-action',
  standalone: true,
  imports: [RouterLink],
  template: `
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" (click)="openDialog()">Open simple dialog</button>
  <a class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" routerLink="/back-button-navigation/home">Home</a>
  `,
  styles: `
  :host {
      display: flex;
      gap:1rem;
    }
  `
})
export class SimpleActionComponent implements CanComponentDeactivate{

  readonly #dialogService = inject(DialogService);

  openDialog = ():void => {
    this.#dialogService.openDialog(DialogComponent, {
      width: '450px',
      data: { strategy: { type: 'default' } },
      closeOnNavigation: false,
    });
  }

  canDeactivate() {
    return (
      this.#dialogService.getStrategyType()?.onBackBrowserNavigation() ?? true
    );
  }

}
