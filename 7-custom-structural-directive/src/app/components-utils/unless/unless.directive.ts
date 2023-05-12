import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[t3pgUnless]'
})
export class UnlessDirective {
  private hasView: boolean = false;

  constructor(
    private templateRef : TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  @Input() set t3pgUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.container.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.container.clear();
      this.hasView = false;
    }
  }
  

}
