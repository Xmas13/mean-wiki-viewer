import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {JsonpModule} from '@angular/http';
import {MdInputModule} from '@angular/material';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {MdButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';

import { WikiService } from './services/wiki.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    JsonpModule,
    MdInputModule,
    FormsModule,
    FlashMessagesModule,
    MdButtonModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
