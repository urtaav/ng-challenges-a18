import { Directive, DoCheck, EmbeddedViewRef, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngFor]',
  standalone: true
})
class NgforEmptyDirectiveDirective<T> implements DoCheck {
  private vcr = inject(ViewContainerRef);
  // same input as ngFor, we just need it to check if list is empty
  @Input() ngForOf?: T[] = undefined;

  // reference of the empty template to display
  @Input() ngForEmpty!: TemplateRef<unknown>;

  private ref?: EmbeddedViewRef<unknown>;

  ngDoCheck(): void {
    this.ref?.destroy();

    if (!this.ngForOf || this.ngForOf.length === 0) {
      this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
    } else {
      this.ref?.destroy();
    }
  }
}

export { NgforEmptyDirectiveDirective as NgForEmpty };

