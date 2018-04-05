import { Component } from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {noDiscoveryAuthConfig} from './auth-no-discovery.config';
import {AuthenticationServiceService} from './service/authentication-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService: OAuthService, private authenticationService: AuthenticationServiceService) {
    this.oauthService.configure(noDiscoveryAuthConfig);

    this.oauthService.tryLogin().then(() => {
      console.log('id token', this.oauthService.getIdToken());
      this.authenticationService.attemptAuthentication();
    });
  }

}
