import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WikiService {

  constructor(private jsonp: Jsonp) { }

  getWikiArticle(search: string){
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&namespace=0&format=json&callback=JSONP_CALLBACK&search=' + search
    return this.jsonp.request(url)
      .map(res => {
        return res.json();
      })
  }

getWikiFullText(search: string) {
  if (search !== undefined) {
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects&indexpageids&callback=JSONP_CALLBACK&titles=' + search
  return this.jsonp.request(url)
    .map(res => {
      return res.json();
    })
  }
}

}
