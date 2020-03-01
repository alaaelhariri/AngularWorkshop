import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(public httpClient: HttpClient) {
  }

  define(word: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        // Accept: 'application/json',
        // app_id: '5628ec70',
        // app_key: '96b0d8edfe7848359f9367ff18c0a43b',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': 'db691c4fb8msh039c13b3b3ecfbep1d4696jsnb2d4a78a41fe'
      })
    };
    return this.httpClient.get<any>(`https://wordsapiv1.p.rapidapi.com/words/${word}`, httpOptions);
  }
}
