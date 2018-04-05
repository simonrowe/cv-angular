import { AuthConfig } from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';

export const noDiscoveryAuthConfig: AuthConfig = {
  'clientId':
      environment.openIdClientId,
  'redirectUri': environment.oauthRedirectUrl,
  'postLogoutRedirectUri': '',
  'loginUrl': 'https://accounts.google.com/o/oauth2/v2/auth',
  'scope': 'openid profile email',
  'resource': '',
  'rngUrl': '',
  'oidc': true,
  'requestAccessToken': true,
  'options': null,
  'issuer': 'https://accounts.google.com',
  'clearHashAfterLogin': true,
  'tokenEndpoint': 'https://www.googleapis.com/oauth2/v4/token',
  'userinfoEndpoint': 'https://www.googleapis.com/oauth2/v3/userinfo',
  'responseType': 'token',
  'showDebugInformation': true,
  'dummyClientSecret': null,
  'requireHttps': 'remoteOnly',
  'strictDiscoveryDocumentValidation': false,
  'customQueryParams': null,
  'timeoutFactor': 0.75,
  'disableAtHashCheck': false,
  'skipSubjectCheck': false
}
