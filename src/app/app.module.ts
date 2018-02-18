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

const routes


: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeadlineComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgbProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
