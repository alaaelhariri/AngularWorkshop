import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import dictionary from './mock-data/dictionary-data';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(public httpClient: HttpClient) {
  }

  mockDefine(word): Observable<any> {
    const definition = dictionary[word];
    if (!definition) {
      console.error('Word not found in dictionary.');
      return of(null);
    }
    return of(definition);
  }

  define(word: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': 'db691c4fb8msh039c13b3b3ecfbep1d4696jsnb2d4a78a41fe'
      })
    };
    return this.httpClient.get<any>(`https://wordsapiv1.p.rapidapi.com/words/${word}`, httpOptions);
  }
}
