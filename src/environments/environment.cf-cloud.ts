// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  openIdClientId: '662734130754-62onvhmtrcgs3llm6c0smfg27v03l12i.apps.googleusercontent.com',
  oauthRedirectUrl: 'https://cv-web-app.cfapps.io',
  userInfo : 'https://cv-user-service.cfapps.io/user',
  headline : 'https://cv-user-service.cfapps.io/profile/headline',
  killSwitch: 'https://cv-user-service.cfapps.io/actuator/shutdown'
};
