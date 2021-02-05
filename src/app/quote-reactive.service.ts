import { Injectable } from '@angular/core';

import { Quote } from './quote';

import { Observable } from 'rxjs';

@Injectable()
export class QuoteReactiveService {
  url: string = 'http://localhost:8080/quotes-reactive';
  urlPaged: string = 'http://localhost:8080/quotes-reactive-paged';

  getQuoteStream(page?: number, size?: number): Observable<Quote> {
    return new Observable<Quote>((observer) => {
      let url = this.url;
      if (page != null) {
        url = this.urlPaged + '?page=' + page + '&size=' + size;
      }
      let eventSource = new EventSource(url);
      eventSource.onmessage = (event) => {
        console.log('Received event:' + event);
        let json = JSON.parse(event.data);
        observer.next(new Quote(json['id'], json['book'], json['content']));
      };
      eventSource.onerror = (error) => {
        if (eventSource.readyState == 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      };
    });
  }
}
