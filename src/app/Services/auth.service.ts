import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "./environment.service";

export interface LoginCredentials {
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  public login(credentials: LoginCredentials) {
    return this.http.post(this.env.apiUrl() + 'login', Object.assign(credentials, {
      device_name: 'Angular SPA'
    }));
  }

  public logout() {
    return this.http.post(this.env.apiUrl() + 'logout', {});
  }
}
