import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {AuthenticationService} from '../../../service/authentication.service';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;

  isNavbarCollapsed: boolean = true;

  constructor(private oAuthService: OAuthService,
              private authenticationService: AuthenticationService) { }

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
