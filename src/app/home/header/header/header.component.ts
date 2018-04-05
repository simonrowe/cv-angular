import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;

  isNavbarCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
