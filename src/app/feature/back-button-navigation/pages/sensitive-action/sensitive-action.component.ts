import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SensitiveDialogComponent } from '../../components/sensitive-dialog/sensitive-dialog.component';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-sensitive-action',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  template: `
  <button mat-raised-button (click)="openDialog()">
    Open dialog with confirmation dialog on browser back button click
  </button>

  <a mat-raised-button routerLink="/back-button-navigation/home">Home</a>
  `,
  styles: ``
})
export class SensitiveActionComponent implements CanComponentDeactivate {
  readonly #dialogService = inject(DialogService);

  openDialog(): void {
    this.#dialogService.openDialog(SensitiveDialogComponent, {
      width: '450px',
      data: { strategy: { type: 'confirm' } },
      closeOnNavigation: false,
    });
  }

  canDeactivate() {
    return (
      this.#dialogService.getStrategyType()?.onBackBrowserNavigation() ?? true
    );
  }
}
