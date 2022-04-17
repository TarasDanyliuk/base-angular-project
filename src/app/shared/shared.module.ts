import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import * as fromDirectives from './directives';
import * as fromPipes from './pipes';

const COMPONENTS: any = [...fromComponents.sharedComponents];
const DIRECTIVES: any = [...fromDirectives.directives];
const PIPES: any = [...fromPipes.pipes];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ]
})
export class SharedModule { }
