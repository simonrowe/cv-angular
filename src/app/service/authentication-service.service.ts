import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {isNullOrUndefined, isUndefined} from 'util';
import {environment} from '../../environments/environment';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class AuthenticationServiceService {

  public authenticationEventEmmitter: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private oAuthService: OAuthService) { }

  private getLocalStorageItem(key: string): string {
    const value = localStorage.getItem(key);
    if ( value === 'null') {
      return null;
    }
    return value;
  }

  public attemptAuthentication(): void {
      localStorage.setItem('Authorization', this.oAuthService.getIdToken());
      this.http.get(environment.userInfo).subscribe((res: User) => {
        this.authenticate(res);
      });
  }

  private authenticate(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.authenticationEventEmmitter.emit('login');
    this.oAuthService.logOut();
  }

  public getAuthenticatedUser(): User {
    if (this.getLocalStorageItem('user') == null) {
      return null;
    }
    return JSON.parse(this.getLocalStorageItem('user'));
  }

  public isAuthenticated(): boolean {
    return this.getAuthenticatedUser() != null;
  }

  public hasAdminAccess(): boolean {
    return this.isAuthenticated() && this.getAuthenticatedUser().admin;
  }

  public jwtToken(): string {
    return this.getLocalStorageItem('Authorization');
  }

  public logout(): void{
    localStorage.removeItem('user');
    this.authenticationEventEmmitter.emit('logout');
  }

}
