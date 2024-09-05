import { Component, inject } from '@angular/core';
import { InformationComponent } from '../../components/information/information.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { UserStore } from '../../models/user.store';
import { admin, client, everyone, manager, reader, readerAndWriter, writer } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InformationComponent, RouterLink, ButtonComponent],

  template: `
    <header class="flex gap-3 items-center">
      Log as:
      <button app-button (click)="admin()">Admin</button>
      <button app-button (click)="manager()">Manager</button>
      <button app-button (click)="reader()">Reader</button>
      <button app-button (click)="writer()">Writer</button>
      <button app-button (click)="readerWriter()">Reader and Writer</button>
      <button app-button (click)="client()">Client</button>
      <button app-button (click)="everyone()">No Role</button>  
    </header>

    <app-information/>
    <button app-button class="mt-10" routerLink="/directive-role/enter">
       Enter application
    </button>
  `,
  styles: ``
})
export class LoginComponent {
  private userStore = inject(UserStore);

  admin() {
    this.userStore.add(admin);
  }
  manager() {
    this.userStore.add(manager);
  }
  reader() {
    this.userStore.add(reader);
  }
  writer() {
    this.userStore.add(writer);
  }
  readerWriter() {
    this.userStore.add(readerAndWriter);
  }
  client() {
    this.userStore.add(client);
  }
  everyone() {
    this.userStore.add(everyone);
  }
}
