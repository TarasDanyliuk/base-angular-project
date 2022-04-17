import { DeliveryAndPaymentComponent } from "./delivery-and-payment/delivery-and-payment.component";
import { GuaranteeComponent } from "./guarantee/guarantee.component";
import { ReturnOfGoodsComponent } from "./return-of-goods/return-of-goods.component";

export const components: any[] = [DeliveryAndPaymentComponent, GuaranteeComponent, ReturnOfGoodsComponent];

// To import components by one
export * from "./delivery-and-payment/delivery-and-payment.component";
export * from "./guarantee/guarantee.component";
export * from "./return-of-goods/return-of-goods.component";