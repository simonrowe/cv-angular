import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {HttpClient} from '@angular/common/http';
import {AuthenticationServiceService} from '../../../service/authentication-service.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;

  isNavbarCollapsed: boolean = true;

  constructor(private http: HttpClient, private authentiationService: AuthenticationServiceService) { }

  ngOnInit() {
  }

  public canKill(): boolean {
    return this.authentiationService.hasAdminAccess();
  }

  public kill(): void {
    this.http.post(environment.killSwitch, {}).subscribe(() => {
      alert('We have killed out microservice');
    });
  }



}
