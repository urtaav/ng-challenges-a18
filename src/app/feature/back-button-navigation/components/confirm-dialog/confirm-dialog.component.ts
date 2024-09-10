import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { BaseDialogComponent } from '../../base-dialog';
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  template: `
<h2 mat-dialog-title>Confirm Action</h2>
<mat-dialog-content>
  Are you sure you want to perform this action?
</mat-dialog-content>
<mat-dialog-actions>
  <button
    mat-button
    mat-dialog-close
    (click)="dialogService.closeActiveDialog()">
    No
  </button>
  <button
    mat-button
    mat-dialog-close
    cdkFocusInitial
    (click)="dialogService.closeAll()">
    Yes
  </button>
</mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent extends BaseDialogComponent {
  constructor() {
    super();
  }
}