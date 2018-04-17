import {AfterViewChecked, Component, Input, OnInit, Renderer2} from '@angular/core';
import {User} from '../../../model/user';
import {Headline} from '../../../model/headline';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {isNullOrUndefined} from 'util';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-profile-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class ProfileHeadlineComponent implements OnInit, AfterViewChecked {

  @Input() user: User;


  headline: Headline = new Headline('');

  headlineForm: FormGroup;
  headlineSuccessMessage: string;
  private _headlineSuccess = new Subject<string>();
  headlineEdit: boolean = false;


  constructor(private http: HttpClient, private fb: FormBuilder, private renderer: Renderer2) {
    this.headlineForm = fb.group({
    });
  }

  ngAfterViewChecked(): void {
    if (this.headlineEdit) {
      this.renderer.selectRootElement('#headlineInput').focus();
    }
  }

  ngOnInit() {
    this.http.get(environment.headline).subscribe((headline: Headline) => {
      this.headline = headline;
    });


    this._headlineSuccess.subscribe((message) => this.headlineSuccessMessage = message);
    debounceTime.call(this._headlineSuccess, 3000).subscribe(() => this.headlineSuccessMessage = null);

  }

  public canEdit(): boolean {
    return !isNullOrUndefined(this.user) && this.user.admin;
  }

  public save(): void {
    this.http.post(environment.headline + '/save', this.headline).subscribe(() => {
      this.headlineEdit = false;
      this._headlineSuccess.next('Headline saved sucessfully');
    });
  }

  public toggleHeadlineEdit(): void {
    this.headlineEdit = !this.headlineEdit;
  }

}
