import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private initialLeft = 0;
  private initialTop = 0;
  private offsetX: number = 0;
  private offsetY: number = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.startX = event.clientX;
    this.startY = event.clientY;
    // Calculate the initial offsets
    // Add scrollX for absolute positioning
    this.initialLeft = rect.left + window.scrollX;
    // Add scrollY for absolute positioning
    this.initialTop = rect.top + window.scrollY;
    // Store the initial mouse position relative to the card's position
    this.offsetX = this.startX - this.initialLeft;
    this.offsetY = this.startY - this.initialTop;
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      // Apply the initial offsets to keep the card under the cursor
      const newLeft = event.clientX - this.offsetX;
      const newTop = event.clientY - this.offsetY;
      this.renderer.setStyle(this.el.nativeElement, 'left', `${newLeft}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${newTop}px`);
    }
  }

  @HostListener('document:mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }
}
