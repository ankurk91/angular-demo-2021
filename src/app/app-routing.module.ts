import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./Components/Auth/login/login.component";
import {RegisterComponent} from "./Components/Auth/register/register.component";
import {ForgotPasswordComponent} from "./Components/Auth/forgot-password/forgot-password.component";
import {PostIndexComponent} from "./Components/Post/index/post-index.component";
import {PostCreateComponent} from "./Components/Post/create/post-create.component";
import {PostShowComponent} from "./Components/Post/show/post-show.component";
import {GuestOnlyGuard} from "./Guards/guest-only.guard";
import {PreventGuestGuard} from "./Guards/prevent-guest.guard";

const routes: Routes = [
  {
    path: '',
    component: PostIndexComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestOnlyGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestOnlyGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [GuestOnlyGuard]
  },
  {
    path: 'posts/create',
    component: PostCreateComponent,
    canActivate: [PreventGuestGuard]
  },
  {
    path: 'posts/:id',
    component: PostShowComponent
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
