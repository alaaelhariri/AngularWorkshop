import { Component, OnInit } from '@angular/core';
import { DictionaryService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss']
})
export class DefinitionsComponent implements OnInit {

  definition;

  constructor(public route: ActivatedRoute, public dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.define(param.word);
    });
  }

  define(word: string) {
    this.dictionaryService.define(word).subscribe(def => this.definition = def);
  }

}
