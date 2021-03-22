import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessTokenKey = 'access_token';
  private prefix = 'app_';
  public readonly storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  protected parseJSON<T extends any>(value: string | null): T | string | null {
    if (value === null) {
      return value;
    }
    return JSON.parse(value);
  }

  public getTokenKeyName() {
    return `${this.prefix}${this.accessTokenKey}`;
  }

  public getAccessToken() {
    const token = this.storage.getItem(this.getTokenKeyName());
    if (!!token) {
      return this.parseJSON(token)
    }
    return null
  }

  public setAccessToken(value: string) {
    return this.storage.setItem(this.getTokenKeyName(), JSON.stringify(value))
  }

  public deleteAccessToken() {
    return this.storage.removeItem(this.getTokenKeyName())
  }

}
