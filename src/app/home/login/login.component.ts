import {Component, Input, OnInit} from '@angular/core';
import { OAuthService} from 'angular-oauth2-oidc';
import {User} from '../../model/user';
import {AuthenticationServiceService} from '../../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Input() user: User;

  constructor( private oAuthService: OAuthService, private authenticationService: AuthenticationServiceService) { }

  ngOnInit() {
  }

  public login(): void {
    this.oAuthService.initImplicitFlow();
  }

  public logout(): void {
    this.oAuthService.logOut();
    this.authenticationService.logout();
  }

  public authenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

}
