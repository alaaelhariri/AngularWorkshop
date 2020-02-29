import { Component, ViewChild } from '@angular/core';
import { DictionaryService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dictionaryService: DictionaryService) {}

  define(word: string) {
    this.dictionaryService.define(word).subscribe(def => console.log(def));
  }
}
