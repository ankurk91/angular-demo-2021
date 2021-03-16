import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() {
  }

  public env() {
    return environment;
  }

  public apiUrl() {
    return environment.apiUrl;
  }
}
