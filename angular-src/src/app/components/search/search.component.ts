import { Component, OnInit, Input } from '@angular/core';
import { WikiService } from '../../services/wiki.service';
import { SearchResults } from '../classes/SearchResults';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchResults]
})
export class SearchComponent implements OnInit {
  input:string;
  constructor(private wiki: WikiService, private search: SearchResults) {
   }
  ngOnInit() {
  }

  searchWiki() {
    if (this.input === undefined) {

    }
    else {
    this.wiki.getResults(this.input)
                    .subscribe(data => {
                      this.search.stuff = {title: data[1], description: data[2], link: data[3] }
                    })
    }
  }

}
