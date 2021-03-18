import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './Components/Auth/login/login.component';
import {RegisterComponent} from './Components/Auth/register/register.component';
import {ForgotPasswordComponent} from './Components/Auth/forgot-password/forgot-password.component';
import {PostIndexComponent} from './Components/Post/index/post-index.component';
import {PostCreateComponent} from './Components/Post/create/post-create.component';
import {PostShowComponent} from './Components/Post/show/post-show.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PostIndexComponent,
    PostCreateComponent,
    PostShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
