import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() coreModule:CoreModule ){
    if (coreModule) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
