import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import * as fromPages from './pages';
import * as fromCommonPagesComponents from './common-pages-components';
import * as fromDirectives from './directives';
import * as fromPipes from './pipes';
import * as fromServices from './services';


const COMPONENTS: any = [...fromPages.components, ...fromCommonPagesComponents.commonPagesComponents];

@NgModule({
  declarations: [
   ...COMPONENTS,
   ...fromDirectives.directives,
   ...fromPipes.pipes
  ],
  providers: [
    ...fromServices.services
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
})
export class AuthenticationModule { }
