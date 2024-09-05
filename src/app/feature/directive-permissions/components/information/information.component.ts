import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HasRoleDirective } from '../../directives/has-role.directive';
import { UserStore } from '../../models/user.store';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule,AsyncPipe,JsonPipe, HasRoleDirective],
  template: `
<h2 class="mt-10 text-2xl font-bold text-gray-800">Information Panel</h2>

<div class="bg-gray-100 p-4 rounded-lg shadow mt-4">
  <pre class="text-sm text-gray-700">{{ user | async | json }}</pre>
</div>

<!-- Admin can see everything -->
<div *hasRoleIsAdmin="true" class="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
  Visible only for super admin
</div>

<div *hasRole="'MANAGER'; isAdmin: true" class="mt-4 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
  Visible if manager and admin
</div>

<div *hasRole="['MANAGER', 'READER']" class="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
  Visible if manager and/or reader
</div>

<div *hasRole="['MANAGER', 'WRITER']" class="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
  Visible if manager and/or writer
</div>

<div *hasRole="'CLIENT'" class="mt-4 p-4 bg-purple-100 border-l-4 border-purple-500 text-purple-700">
  Visible if client
</div>

<div class="mt-4 p-4 bg-gray-200 rounded-lg shadow">
  Visible for everyone
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationComponent {
  user = inject(UserStore).user$
}
