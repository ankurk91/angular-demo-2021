import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "./environment.service";
import {tap} from "rxjs/operators";
import {TokenService} from "./token.service";

export interface LoginCredentials {
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private env: EnvironmentService, private tokenService: TokenService) {
  }

  public login(credentials: LoginCredentials) {
    return this.http
      .post(this.env.apiUrl() + 'login', Object.assign(credentials, {
        device_name: 'Angular SPA'
      }))
      .pipe(tap((response: any) => {
        this.tokenService.setAccessToken(response?.access_token)
      }));
  }

  public logout() {
    return this.http
      .post(this.env.apiUrl() + 'logout', {})
      .pipe(tap((response: any) => {
        this.tokenService.deleteAccessToken()
      }));
  }

  public forgotPassword(payload: any) {
    return this.http
      .post(this.env.apiUrl() + 'password/email', payload);
  }

  public isLoggedIn(): boolean {
    return !!this.tokenService.getAccessToken()
  }

}
