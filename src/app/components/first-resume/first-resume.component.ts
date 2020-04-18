import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-resume',
  templateUrl: './first-resume.component.html',
  styleUrls: ['./first-resume.component.css']
})
export class FirstResumeComponent implements OnInit {

  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
