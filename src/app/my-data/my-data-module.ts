import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MyData {

  "language": string,
  "part": string,
  "lesson": string,
  "lesson_title": string,
  "units": [
  {
    "chapter_title": string,
    "u_obj": [
      {
        "content": {
          "text":string,
          "images":[{"path":string,"title":string}],
          "audio":string
        },
        "know": {
          "text":string,
          "images":[{"path":string,"title":string}],
          "audio":string
        },
        "analysis": {
          "text":string,
          "images":[{"path":string,"title":string}],
          "audio":string
        }
      }
    ]
  }
],
  "question":string,
  "quiz": [
  {
    selected: any;
    "question": string,
    "text": string,
    "cases": string[],
    "answer": string
  }
]
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MyDataModule {

}
