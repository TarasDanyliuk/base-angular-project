import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const components: any[] = [LoginComponent, RegisterComponent, ForgotPasswordComponent];

// To import components by one
export * from "./forgot-password/forgot-password.component";
export * from "./login/login.component";
export * from "./register/register.component";