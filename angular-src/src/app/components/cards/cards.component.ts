import { Component, OnInit, Input } from '@angular/core';
import { WikiService } from '../../services/wiki.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() searchResults
  article;
  selectedItem;
  constructor(private wiki: WikiService) { }

  ngOnInit() {
  }

  clickedArticle() {
    if (this.selectedItem !== "") {
    this.wiki.getWikiFullText(this.selectedItem)
      .subscribe(data => {
        let pageid = data.query.pageids[0];
        this.article = data.query.pages[pageid].extract;
      });
    }
  }

  onSelect(item) {
    if (this.selectedItem === item) {
      this.selectedItem = ""
    }
    else {
    this.selectedItem = item;
  }

}

}
