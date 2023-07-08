import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  
  constructor(private el: ElementRef) { }

 @Input('appInputFormat') format: string = "";

  @HostListener('focus') onFocus() {
    console.log("on Focus");
  }

  @HostListener('blur') onBlur() {
    console.log("on Blur");
    let value: string = this.el.nativeElement.value;
    if (this.format == 'uppercase')
    this.el.nativeElement.value = value.toUpperCase();
    else
    this.el.nativeElement.value = value.toLowerCase();
  }

  

}
