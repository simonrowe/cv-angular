import { Component, OnInit } from '@angular/core';
import { Skill} from '../../model/skill';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public skills: Skill[];

  constructor() { }

  ngOnInit() {
    this.skills = [new Skill('Java', ['1.4', '5', '6', '7', '8'], 92),
    new Skill('Spring', ['Boot', 'Cloud', 'Data', 'Security', 'Session', 'Hateos'], 95),
    new Skill('Search/NoSql', ['ElasticSearch', 'Solr', 'Lucene', 'MongoDB', 'DynamoDB'], 84 ),
    new Skill('AWS', ['ECS', 'Fargage', 'Cloud Formation', 'S3', 'SQS', 'ELB', 'CloudWatch',
      'Auto Scaling', 'Route53', 'IAM', 'Lambda', 'RDS', 'ElasticCache'], 89),
    new Skill('CI/CD', ['Maven', 'Ant', 'Jenkins', 'Docker', 'Git', 'SVN'], 93),
    new Skill('RDBMS', ['MySQL', 'Postgres', 'SQL Server', 'Oracle', 'Informix', 'DB2'], 87),
    new Skill('TDD', ['Cucumber', 'Selenium', 'DBUnit', 'Mockito', 'EasyMock', 'Spring Rest Docs'], 93)];
  }

}
