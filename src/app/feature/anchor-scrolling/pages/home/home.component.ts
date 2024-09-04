import { Component } from '@angular/core';
import { NavButtonComponent } from '../../components/nav-button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-home',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class HomeComponent { }