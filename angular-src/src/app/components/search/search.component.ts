// description: This component is for the search box, button to submit search, or get random article
import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { WikiService } from '../../services/wiki.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  input: string; // ngmodel for input in search.component.html
  searchResults: object[]; // Where parsed search results are stored to be sent to main app component to be used by cards component.
  @Output() emitSearchResults: EventEmitter<object[]> = new EventEmitter(); // Creates new EventEmitter to send as output to main app component

  constructor(private wiki: WikiService, private flashmessage: FlashMessagesService) {
   }
  ngOnInit() {
  }

  searchWiki() {
    if (this.input === undefined) {
      this.flashmessage.show('Please Enter a Search Term', { cssClass: 'alert-danger', timeout: 2500 }); // Will show flash message at top of page if no input in search box
    }
    else {
    // Subscribes to the getWikiArticle() service and uses input gathered from search box as input for search.
    this.wiki.getWikiArticle(this.input)
                    .subscribe(data => {
                        if (data.length > 0 && data[1].length > 0) { // Makes sure there is actually data
                        this.searchResults = []; // Sets searchResults object to empty to not append after previous search
                        // Creates and pushes an object since the data is in the form of 3 arrays with 10 results.
                        let j = 0;
                        while (j < data[1].length) { // sets it to the length of the first array since the results will all be the same length
                        let obj = {title: data[1][j], description: data[2][j], link: data[3][j]}; // Resets the object each time through while loop
                        this.searchResults.push(obj); // Pushes the newly made object to the searchResults array.
                        j++;
                      }
                    } else {
                      this.flashmessage.show('Please Enter a Search Term', { cssClass: 'alert-danger', timeout: 2500 }); // If there isn't data, show a flashmessage
                    }
                    this.sendSearchResultsToParent(); // Emits event to main app component when searchResults array is ready
                    })
    }
  }

  // Subscribes to the getRandomWikiArticle() service to gather data from get request.
  // Since we're only getting one result, we don't use a while loop.
  randomWiki() {
    this.wiki.getRandomWikiArticle()
      .subscribe(data => {
        this.searchResults = []; // resets search results
        let articleid = Object.keys(data.query.pages)[0]; // gets article ID since that is needed for parsing and creating object.
        // Sets up object to be pushed to the searchResults array. It is a slightly more complicated request to parse.
        let obj = {title: data.query.pages[articleid].title, description: data.query.pages[articleid].extract, link: data.query.pages[articleid].fullurl}
        this.searchResults.push(obj); // Pushes the newly made object to the searchResults array.
        this.sendSearchResultsToParent(); // Emits event to main app component when searchResults array is ready
      })
  }

  // Function used for emitting the searchResults array to the main app component.
  sendSearchResultsToParent() {
    this.emitSearchResults.emit(this.searchResults);
  }

}
