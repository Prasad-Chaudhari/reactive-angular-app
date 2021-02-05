import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail.component';
import { QuoteBlockingServie } from './quote-blocking.service';
import { QuoteComponent } from './quote.component';
import { QuoteReactiveService } from './quote-reactive.service';

@NgModule({
  declarations: [AppComponent, QuoteComponent, QuoteDetailComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [QuoteBlockingServie, QuoteReactiveService],
  bootstrap: [AppComponent],
})
export class AppModule {}
