import { ElementRef } from '@angular/core';
import { MyhighlightDirective } from './myhighlight.directive';

describe('MyhighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef<any>; // Create a mock ElementRef instance
    const directive = new MyhighlightDirective(mockElementRef);
   
    expect(directive).toBeTruthy();
  });
});
