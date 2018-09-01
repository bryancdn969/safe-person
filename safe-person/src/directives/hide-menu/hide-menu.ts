import { Directive } from '@angular/core';

/**
 * Generated class for the HideMenuDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-menu]' // Attribute selector
})
export class HideMenuDirective {

  constructor() {
    console.log('Hello HideMenuDirective Directive');
  }

}
