import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryAndPaymentComponent, GuaranteeComponent, ReturnOfGoodsComponent } from './pages';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'delivery-and-payment'},
  {path: 'delivery-and-payment', component: DeliveryAndPaymentComponent},
  {path: 'guarantee', component: GuaranteeComponent},
  {path: 'return-of-goods', component: ReturnOfGoodsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageInformationRoutingModule { }
