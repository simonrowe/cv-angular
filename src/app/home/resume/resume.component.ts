import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  jobs: Job[];

  constructor() {
    const universal: Job = new Job('Universal Music Publishing', '/assets/images/resume/umpg.png', 'Jul 2011 - Present', 'Director, Java Development',
      '<p>Responsible for architecture and delivery of greenfield internal and public facing business applications. ' +
      'Super scrum master, removing obstacles for four dynamic scrum teams. Frequent commiter.</p>' +
      '<p>Re-architecture of multiple monoliths with single points of failure to AWS,' +
      'resulting in scalable, fault tolerant software reducing the operational cost significantly.</p>' +
      '<p>Introduced automated testing as a development activity utilising technologies such as cucumber, selenium, ' +
      'docker which allows for far shorter release cycles.</p>' +
      '<p>Designed the company\'s first \'serverless\' application at AWS, Utilising ECS Fargate, Lambda, SQS, SNS, ' +
      'ElasticSearch, S3.</p>', 3);
    const workcover: Job = new Job('Workcover Queensland', '/assets/images/resume/workcover.jpg', 'Nov 2009 - May 2011', 'Senior Applications Developer',
      '<p>Analysis, Design, Development, Testing &amp; Documentation of enhancements to internal' +
      'and external facing web applications within an agile environment</p>' +
      '<p>Mentoring of less experienced developers</p>' +
      '<p>Technologies used: JEE, JSP, Spring, Ibatis, Tiles, HTML, JQuery, Oracle, Ruby,' +
      'Cucumber, Watir, PowerMock, EasyMock, TeamCity, Weblogic. SVN, DWR, Jasper' +
      ' Reports, Eclipse, SVN, CVS, Apache FOP, XML, XSLT.</p>', 2);
    const macquarie: Job = new Job('Macquarie Group', '/assets/images/resume/macquarie.png', 'Feb 2008 - Nov 2009', 'Analyst / Programmer',
      '<p>Design, Build, Test &amp; Document new software solutions across the Risk Management\n' +
      'Group</p>' +
      '<p>Maintain and Enhance existing systems.</p>' +
      '<p>Mentoring of junior developers.</p>' +
      '<p>Technologies Used: JEE, Java, JSP, HTML, JQuery, Dojo, Spring, Hibernate, Sybase,' +
      'HSQLDB, SQL Server, Tiles, JUnit, Selenium, PHP</p>', 2);
    const sas: Job = new Job('SAS Asia Pacific', '/assets/images/resume/sas.png', 'Oct 2006 - Feb 2008', 'Junior Applications Developer',
      '<p>Design, Development, Testing and Documentation of the Synapse internal business' +
      'software.</p>' +
      '<p>3rd Level Support</p>' +
      '<p>Technologies Used: SAS, Java, JSP, JEE, Spring, Struts, Web Services, XFire.</p>', 2);
    const civica: Job = new Job('Civica', '/assets/images/resume/civica.jpg', 'Jan 2005 - Sep 2006', 'Graduate Developer',
      '<p>Design, Development, Testing and Documentation of the Authority application.' +
      '</p><p>3rd Level Support &amp; Maintenance duties.' +
      '</p><p>Technologies Used: Java, JEE, Informix 4GL, Informix, Oracle, SQL Server, VBA, Crystal' +
      'Reports</p>', 1);
    const university: Job = new Job('University of Newcastle', '/assets/images/resume/uon.png', '2002 - 2004', 'Computer Science',
      '<p>WAM (Weighted Average Mark) : 81.24</p>' +
      '<p><u>Awards:</u><ol><li>Object Technology Prize 2004</li><li>Nextgen.net prize ' +
      '2003</li><li> Deans Merit List (2002-2004)</li><li>Deans Achievement Award 2002.</li></ol></p>'
      , 1);
    this.jobs = [universal, workcover, macquarie, sas, civica, university];
  }

  ngOnInit() {
  }

}
