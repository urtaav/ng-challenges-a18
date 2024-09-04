import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterModule,ReactiveFormsModule],
  template:`
<div class="flex flex-col space-y-4 max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
  <div class="flex flex-col">
    <label for="userName" class="mb-2 text-sm font-medium text-gray-700">UserName</label>
    <input
      type="text"
      name="userName"
      id="userName"
      [formControl]="userName"
      maxlength="20"
      class="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
  </div>

  <div class="flex flex-col">
    <label for="testId" class="mb-2 text-sm font-medium text-gray-700">TestId</label>
    <input
      type="number"
      name="testId"
      id="testId"
      [formControl]="testId"
      maxlength="10"
      class="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
  </div>

  <div class="flex space-x-4">
    <button
      [routerLink]="'/router-input/test/' + testId.value"
      [queryParams]="{ user: userName.value }"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Test
    </button>
    
    <button
      routerLink="/router-input"
      class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      Home
    </button>
  </div>
  
  <router-outlet></router-outlet>
</div>
  `
})
export class HomeComponent {
userName = new FormControl();
testId = new FormControl();
}
