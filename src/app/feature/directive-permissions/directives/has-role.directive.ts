import { NgIf } from '@angular/common';
import { Directive, inject, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserStore } from '../models/user.store';
import { Role } from '../models/user.model';
import { Subject, takeUntil } from 'rxjs';
// @Directive: Declara que esta clase es una directiva en Angular.
@Directive({
  selector: '[hasRole],[hasRoleIsAdmin]',  //  La directiva se aplicará a los elementos HTML que tengan los atributos hasRole o hasRoleIsAdmin.
  standalone: true,
  hostDirectives: [NgIf],// Esto significa que la directiva utiliza las funcionalidades de NgIf internamente, pero no es lo mismo que heredarla. 
})
export class HasRoleDirective implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private templateRef = inject(TemplateRef<unknown>); // la referencia al contenido de la plantilla que envuelve la directiva. Esto permite acceder al contenido HTML del elemento al que se aplica la directiva.
  private viewContainerRef = inject(ViewContainerRef); //Se utiliza para insertar o eliminar plantillas de la vista. Controla si el contenido debe renderizarse o no.
  private store = inject(UserStore);

  @Input('hasRole') role: Role | Role[] | undefined = undefined; //recibe uno o varios roles. La directiva usará esta información para determinar si el contenido debe mostrarse.
  @Input('hasRoleIsAdmin') isAdmin = false; // indica si el contenido debe mostrarse solo si el usuario es administrador. 

  ngOnInit(): void {
    if (this.isAdmin) {
      this.store.isAdmin$
        .pipe(takeUntil(this.destroy$))
        .subscribe((isAdmin) => isAdmin ? this.addTemplate() : this.clearTemplate())
    } else if (this.role) {
      this.store
        .hasAnyRole(this.role)
        .pipe(takeUntil(this.destroy$))
        .subscribe((hasPermission) =>
          hasPermission ? this.addTemplate() : this.clearTemplate()
        );
    } else {
      this.addTemplate();
    }
  }

  private addTemplate = () => {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  private clearTemplate = () => {
    this.viewContainerRef.clear();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
