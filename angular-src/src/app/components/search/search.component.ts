import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { WikiService } from '../../services/wiki.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  input:string;
  searchResults: object[]
  @Output() emitSearchResults: EventEmitter<object[]> = new EventEmitter();
  constructor(private wiki: WikiService, private flashmessage: FlashMessagesService) {
   }
  ngOnInit() {
  }

  searchWiki() {
    if (this.input === undefined) {
      this.flashmessage.show('Please Enter a Search Term');
    }
    else {
    this.wiki.getWikiArticle(this.input)
                    .subscribe(data => {
                        if (data.length > 0 && data[1].length > 0) {
                        this.searchResults = [];
                        let j = 0;
                        while (j < data[1].length) {
                        let obj = {title: data[1][j], description: data[2][j], link: data[3][j]}
                        this.searchResults.push(obj);
                        j++;
                      }
                    } else {
                      this.flashmessage.show('Please Enter a Search Term');
                    }
                    this.sendSearchResultsToParent();
                    })
    }
  }

  sendSearchResultsToParent() {
    this.emitSearchResults.emit(this.searchResults);
  }

}
