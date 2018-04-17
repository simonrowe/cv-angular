import {Component, Input, OnInit} from '@angular/core';
import {Alert} from '../alert';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() private alertSubject: Subject<Alert>;
  alert: Alert;

  constructor() { }

  ngOnInit() {
    this.alertSubject.subscribe((alert: Alert) => this.alert = alert);
    debounceTime.call(this.alertSubject, 3000).subscribe(() => this.alert = null);
  }

}
