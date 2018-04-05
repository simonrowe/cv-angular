import {Component, Input, OnInit} from '@angular/core';
import { Skill} from '../../model/skill';
import {User} from '../../model/user';
import {isNullOrUndefined} from 'util';
import {HttpClient} from '@angular/common/http';
import {Headline} from '../../model/headline';
import {environment} from '../../../environments/environment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/authentication-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: User;

  public skills: Skill[];
  headline: string;
  headlineForm: FormGroup;
  profileEditing: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.headlineForm = fb.group({
      'headline':  ['']
    });
  }

  ngOnInit() {
    this.http.get(environment.headline).subscribe((headline: Headline) => {
      this.headline = headline.headline;
    });
    this.skills = [new Skill('Java', 92,[new Skill('1.4', 8), new Skill('5', 8),  new Skill('6', 8),
      new Skill ('7', 9.5), new Skill('8', 9)]),
    new Skill('Spring', 95,[new Skill('Boot', 9.5), new Skill('Cloud', 8), new Skill('Data', 9.5),
      new Skill('Security', 9), new Skill( 'Session', 8), new Skill('Hateos', 8), new Skill('Web', 9)]),
    new Skill('Search/NoSql', 84, [new Skill('ElasticSearch', 8), new Skill('Solr', 9),
      new  Skill('MongoDB', 8), new Skill('DynamoDB', 8.5)]),
    new Skill('AWS', 89, [new Skill('ECS', 9.5), new Skill('Fargate', 9), new Skill('CloudFormation', 9.5),
      new Skill('S3', 9.5), new Skill('SQS', 9), new Skill('ELB', 8.5), new Skill('CloudWatch', 8),
      new Skill('AutoScaling', 7.5), new Skill('Route53', 7), new Skill('IAM', 8), new Skill('Lambda', 8.5),
      new Skill('RDS',8), new Skill('ElasticCache', 7)]),
    new Skill('CI/CD', 93, [new Skill('Maven', 10), new Skill('Ant', 7), new Skill('Jenkins', 8),
      new Skill('Docker', 8), new Skill('Git', 7.5), new Skill('SVN', 8)]),
    new Skill('RDBMS', 87, [new Skill('MySQL', 8.5), new Skill('Postgres', 7.5), new Skill('SQL Server', 8),
      new Skill('Oracle', 7), new Skill('Informix', 7), new Skill('DB2', 7.5)]),
    new Skill('TDD', 93, [new Skill('Cucumber', 9), new Skill('Selenium', 8), new Skill('DBUnit', 9),
      new Skill('Mockito', 9.5), new Skill('EasyMock', 9), new Skill('Spring Rest Docs', 8)]),
    new Skill('UI', 80, [new Skill('Angular JS', 7.5), new Skill('Angular', 8.5), new Skill('HTML5', 7.5),
      new Skill('CSS3', 7.5), new Skill('JQuery', 8.5), new Skill('Javascript', 8),
      new Skill('TypeScript', 8), new Skill('JSTL', 9.5)])];


  }

  public canEdit(): boolean {
    return !isNullOrUndefined(this.user) && this.user.admin;
  }

  public save(): void {
    this.http.post(environment.headline + '/save', new Headline(this.headline)).subscribe(() => {
      this.profileEditing = false;
      alert('Headline has been saved');
    });
  }

}
