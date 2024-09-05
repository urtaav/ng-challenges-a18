import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-no-user',
  standalone: true,
  imports: [RouterLink,ButtonComponent],
  template: `
  <div class="p-6 bg-gray-100 rounded-lg shadow-md">
    <p class="text-xl font-semibold text-gray-800 mb-4">Dashboard for No User works!</p>
    <button app-button routerLink="/directive-role/login">Logout</button>
  </div>
  `,
 changeDetection:ChangeDetectionStrategy.OnPush
})
export class NoUserComponent {

}
