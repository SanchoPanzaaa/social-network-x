import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createHtmlTag',
  pure: false,
})
export class CustomPipe implements PipeTransform {
  transform(component: string): string {
    return component;
  }
}
