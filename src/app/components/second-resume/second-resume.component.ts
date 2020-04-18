import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-resume',
  templateUrl: './second-resume.component.html',
  styleUrls: ['./second-resume.component.css']
})
export class SecondResumeComponent implements OnInit {

  skills: Array<any>;

  constructor() {
    this.skills = [
      { name: 'Java', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] },
      { name: 'Spring Boot', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] },
      { name: 'Javascript', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] },
      { name: 'Angular', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] },
      { name: 'Node.js', rate: ['lens', 'lens', 'lens', 'trip_origin', 'trip_origin'] },
      { name: 'PHP', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] },
      { name: 'Laravel', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] },
      { name: 'SQL', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] },
      { name: 'MongoDB', rate: ['lens', 'lens', 'lens', 'trip_origin', 'trip_origin'] },
      { name: 'Git', rate: ['lens', 'lens', 'lens', 'trip_origin', 'trip_origin'] },
      { name: 'Unit Testing', rate: ['lens', 'lens', 'lens', 'trip_origin', 'trip_origin'] },
      { name: 'Scrum', rate: ['lens', 'lens', 'lens', 'lens', 'trip_origin'] }
    ];
  }

  ngOnInit(): void {
  }

}
