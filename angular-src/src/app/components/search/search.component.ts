import { Component, OnInit, Input } from '@angular/core';
import { WikiService } from '../../services/wiki.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  input:string;
  searchResults: object[];
  article;
  selectedItem;
  constructor(private wiki: WikiService) {
   }
  ngOnInit() {
    this.searchWiki();
  }

  searchWiki() {
    if (this.input === undefined) {
      console.log("Enter a search term")
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
                      console.log("Enter a search term");
                    }
                    })
    }
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
