import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent} from './home/home/home.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header/header.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { HeadlineComponent} from './home/headline/headline.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ResumeComponent } from './home/resume/resume.component';
import { ServicesComponent } from './home/services/services.component';
import { FooterComponent } from './home/footer/footer.component';
import { BlogComponent } from './home/blog/blog.component';
import { ComingSoonComponent } from './home/coming-soon/coming-soon.component';
import { OAuthModule, AuthConfig} from 'angular-oauth2-oidc';
import {LoginComponent} from './home/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomHttpInterceptorService} from './service/custom-http-interceptor.service';
import {AuthenticationServiceService} from './service/authentication-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeadlineComponent,
    ProfileComponent,
    ResumeComponent,
    ServicesComponent,
    FooterComponent,
    BlogComponent,
    ComingSoonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgbProgressbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorService,
      multi: true
  },
    AuthenticationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
