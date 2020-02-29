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
        Accept: 'application/json',
        app_id: '5628ec70',
        app_key: '96b0d8edfe7848359f9367ff18c0a43b'
      })
    };
    return this.httpClient.get<any>(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`, httpOptions);
  }
}
