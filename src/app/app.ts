import {Component, OnInit} from '@angular/core';

import { Data} from './services/data';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  lessonData: any;

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.dataService.getLessonData().subscribe(data => {
      this.lessonData = data;
    });
  }
}
