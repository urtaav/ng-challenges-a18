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
  selector: 'app-sensitive-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  template: `
<h2 mat-dialog-title>Sensitive File Deletion</h2>
<mat-dialog-content>Would you like to delete cat.jpeg?</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>No</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
</mat-dialog-actions>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SensitiveDialogComponent extends BaseDialogComponent {
  constructor() {
    super();
  }
}