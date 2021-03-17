import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./Auth/login/login.component";
import {RegisterComponent} from "./Auth/register/register.component";
import {ForgotPasswordComponent} from "./Auth/forgot-password/forgot-password.component";
import {PostIndexComponent} from "./Post/index/post-index.component";
import {PostCreateComponent} from "./Post/create/post-create.component";
import {PostShowComponent} from "./Post/show/post-show.component";
import {SinglePostResolver} from "./Resolvers/single-post.resolver";

const routes: Routes = [
  {path: '', component: PostIndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'posts/create', component: PostCreateComponent},
  {
    path: 'posts/:id',
    resolve: {
      post: SinglePostResolver
    },
    component: PostShowComponent
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
