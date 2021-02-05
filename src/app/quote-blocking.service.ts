import { Injectable } from '@angular/core';

import { Quote } from './quote';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuoteBlockingServie {
  url: string = 'http://localhost:8080/quotes-blocking';
  urlPaged: string = 'http://localhost:8080/quotes-blocking-paged';

  constructor(private http: HttpClient) {}

  getQuoteStream(page?: number, size?: number): Observable<Array<Quote>> {
    let url = this.url;
    if (page != null) {
      url = this.urlPaged + '?page=' + page + '&size=' + size;
    }
    return this.http.get<Array<Quote>>(url);
  }
}
