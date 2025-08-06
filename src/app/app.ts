import {Component, OnInit} from '@angular/core';

import { Data} from './services/data';
import {InteractiveHtmlComponent} from './interactive-html/interactive-html.component';
import {MyData} from './my-data/my-data-module';


@Component({
  selector: 'app-root',
  imports: [InteractiveHtmlComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  lessonData: MyData | undefined;
  modalText: string | null = null;
  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.dataService.getLessonData().subscribe(data => {
      this.lessonData = data;
    });
  }


  openMeaning(text: string) {
    console.log(text);
    this.modalText = text;
  }
  checkQuizAnswer(quizItem: any, selectedIndex: number) {
    if (quizItem.userAnswer === undefined) {
      quizItem.userAnswer = selectedIndex;
    }
  }
  checkAnswer(quiz: any, selected: string) {
    quiz.selected = selected;
  }
}
