import { ElementRef, Renderer2 } from '@angular/core';
import { DraggableDirective } from './draggable.directive';

describe('DraggableDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(null);
    const renderer2: Renderer2 = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass', 'setStyle']);
    const directive = new DraggableDirective(elementRef, renderer2);
    expect(directive).toBeTruthy();
  });
});
