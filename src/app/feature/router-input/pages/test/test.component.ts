import { Component, input } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
    <div class="p-4 bg-gray-100 rounded-lg shadow-md">
      <div class="mb-4">
        <span class="font-semibold text-lg text-gray-700 mr-1">Id:</span>
        <span class="text-gray-900">{{ testId() }}</span>
      </div>
      <div class="mb-4">
        <span class="font-semibold text-lg text-gray-700  mr-1">Permission:</span>
        <span class="text-gray-900">{{ permission() }}</span>
      </div>
      <div class="mb-4">
        <span class="font-semibold text-lg text-gray-700  mr-1">User:</span>
        <span class="text-gray-900">{{ user() }}</span>
      </div>
    </div>
  `,
  styles: ``
})
export class TestComponent {
  testId = input<string>();
  permission = input<string>();
  user = input<string>();
}
