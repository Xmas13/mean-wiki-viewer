// description: Manages all of the jsonp requests the wikipedia api.
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WikiService {

  constructor(private jsonp: Jsonp) { }

  // Uses OpenSearch, Sets the namespace=0 (means only searches articles), formats it as json and uses a jsonp callback to map the observable.
  getWikiArticle(search: string){
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&namespace=0&format=json&callback=JSONP_CALLBACK&search=' + search
    return this.jsonp.request(url)
      .map(res => {
        return res.json();
      })
  }

// Formats as json, takes in as search parameter from the input box, extracts article data, sets redirects (means URLs will redirect if wiki page isn't found),
// and uses a jsonp callback to map the observable. (Also used for getting random wiki article full text)
getWikiFullText(search: string) {
  if (search !== undefined) {
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects&indexpageids&callback=JSONP_CALLBACK&titles=' + search
  return this.jsonp.request(url)
    .map(res => {
      return res.json();
    })
  }
}

// Formats as json, sets generator to random (means its generating a single random article), sets namespace to 0, sets properties of info and extracts,
// Sets info property to get full url, gets explanation text, gets 2 sentences to make a description, sets redirects, and jsonp callback.
getRandomWikiArticle() {
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=info|extracts&inprop=url&explaintext=true&exsentences=2&redirects&callback=JSONP_CALLBACK'
  return this.jsonp.request(url)
    .map(res => {
      return res.json();
    })
}

}
