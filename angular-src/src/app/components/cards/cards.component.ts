// description: This Component provides logic for cards that show up with searchResults gotten from search component
import { Component, OnInit, Input } from '@angular/core';
import { WikiService } from '../../services/wiki.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() searchResults // Input comes from main app component which receives results from search component
  article: string; // variable set from results of getWikiFullText() function
  selectedItem: string; // Is empty string if not selected, populates the title if it is selected
  constructor(private wiki: WikiService) { }

  ngOnInit() {
  }

  // This function only runs a get request to get the full article if it is the selected article.
  // It is subscribed to the observable created by the get request and parses the data to create the
  // article object.
  clickedSearchedArticle() {
    if (this.selectedItem !== "") {
    this.wiki.getWikiFullText(this.selectedItem)
      .subscribe(data => {
        let pageid = data.query.pageids[0];
        this.article = data.query.pages[pageid].extract;
      });
    }
  }

  // Used in Click Handler for clicking on a title of an Article card.
  // This function sets the selected item to the title of selected article.
  onSelect(item) {
    if (this.selectedItem === item) {
      this.selectedItem = ""
    }
    else {
    this.selectedItem = item;
  }

}

}
