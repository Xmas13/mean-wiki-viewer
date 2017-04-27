webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "a {\n  color: #673AB7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".mat-toolbar {\n  width:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<div style=\"margin-left: .25em; margin-right: .25em\">\n  <flash-messages></flash-messages>\n<!-- Sets up emit handler to handle emit event and set searchResults in main app component -->\n<app-search (emitSearchResults)=\"handleSearchResults($event)\"></app-search>\n <!-- Sets up input from main app component for searchResults -->\n<app-cards [searchResults]=\"searchResults\"></app-cards>\n</div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"searchResults !== []\"> <!-- Div will not show cards if there are no searchResults set -->\n<md-card style=\"margin-top: 1em; margin-left: 1em; margin-right: 1em\" *ngFor=\"let item of searchResults\"> <!-- loops through each item in the searchResults object array -->\n  <!-- Sets up click handler for setting whether article is selected and will run the function for getting the article -->\n  <md-card-title><a href=\"javascript:void(0)\" (click)=\"onSelect(item.title);clickedSearchedArticle()\">{{item?.title}}</a></md-card-title>\n  <!-- Sets up description -->\n  <md-card-subtitle>{{item?.description}}</md-card-subtitle>\n  <!-- Sets up link -->\n  <md-card-subtitle><a href=\"{{item?.link}}\" target=\"_blank\">{{item?.link}}</a></md-card-subtitle>\n  <!-- Article will only show below in card if it is the selected item -->\n  <div *ngIf=\"selectedItem == item.title\" [innerHTML]=\"article\"></div>\n</md-card>\n</div>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<!-- Configures input box. Sets a 2 way ngModel bind to input. keyup.enter means we can also run the searchWiki() function if we press enter. -->\n<div style=\"margin-top: 1em;\" class=\"container-fluid\">\n<div class=\"row\">\n<div class=\"col-md-2\">\n<md-input-container style=\"padding-right: 0; width: 100%\">\n  <input mdInput placeholder=\"Search\" [(ngModel)]=\"input\" type=\"search\" (keyup.enter)=\"searchWiki()\">\n</md-input-container>\n</div>\n<div class=\"col-md-10\">\n<!-- Creates buttons that use the searchWiki() and randomWiki() functions as their click handler. -->\n<button md-raised-button (click)=\"searchWiki()\">Search</button>\n<button style=\"margin-left: .5em;\" md-raised-button (click)=\"randomWiki()\">Random Article</button>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<!-- Creates toolbar at the top of the page. -->\n<md-toolbar style=\"margin-bottom: .5em; margin-left: 1em; margin-top: .5em; margin-right: 1em;\" color=\"primary\">\n  <a style=\"color: inherit; text-decoration:none\" href=\"/\">{{this.title}}</a>\n</md-toolbar>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// description: Manages all of the jsonp requests the wikipedia api.



var WikiService = (function () {
    function WikiService(jsonp) {
        this.jsonp = jsonp;
    }
    // Uses OpenSearch, Sets the namespace=0 (means only searches articles), formats it as json and uses a jsonp callback to map the observable.
    WikiService.prototype.getWikiArticle = function (search) {
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&namespace=0&format=json&callback=JSONP_CALLBACK&search=' + search;
        return this.jsonp.request(url)
            .map(function (res) {
            return res.json();
        });
    };
    // Formats as json, takes in as search parameter from the input box, extracts article data, sets redirects (means URLs will redirect if wiki page isn't found),
    // and uses a jsonp callback to map the observable. (Also used for getting random wiki article full text)
    WikiService.prototype.getWikiFullText = function (search) {
        if (search !== undefined) {
            var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects&indexpageids&callback=JSONP_CALLBACK&titles=' + search;
            return this.jsonp.request(url)
                .map(function (res) {
                return res.json();
            });
        }
    };
    // Formats as json, sets generator to random (means its generating a single random article), sets namespace to 0, sets properties of info and extracts,
    // Sets info property to get full url, gets explanation text, gets 2 sentences to make a description, sets redirects, and jsonp callback.
    WikiService.prototype.getRandomWikiArticle = function () {
        var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=info|extracts&inprop=url&explaintext=true&exsentences=2&redirects&callback=JSONP_CALLBACK';
        return this.jsonp.request(url)
            .map(function (res) {
            return res.json();
        });
    };
    return WikiService;
}());
WikiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]) === "function" && _a || Object])
], WikiService);

var _a;
//# sourceMappingURL=wiki.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.handleSearchResults = function (searchResults) {
        this.searchResults = searchResults;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_toolbar_toolbar_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_search_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cards_cards_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_wiki_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_cards_cards_component__["a" /* CardsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdButtonModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_wiki_service__["a" /* WikiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wiki_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// description: This Component provides logic for cards that show up with searchResults gotten from search component


var CardsComponent = (function () {
    function CardsComponent(wiki) {
        this.wiki = wiki;
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    // This function only runs a get request to get the full article if it is the selected article.
    // It is subscribed to the observable created by the get request and parses the data to create the
    // article object.
    CardsComponent.prototype.clickedSearchedArticle = function () {
        var _this = this;
        if (this.selectedItem !== "") {
            this.wiki.getWikiFullText(this.selectedItem)
                .subscribe(function (data) {
                var pageid = data.query.pageids[0];
                _this.article = data.query.pages[pageid].extract;
            });
        }
    };
    // Used in Click Handler for clicking on a title of an Article card.
    // This function sets the selected item to the title of selected article.
    CardsComponent.prototype.onSelect = function (item) {
        if (this.selectedItem === item) {
            this.selectedItem = "";
        }
        else {
            this.selectedItem = item;
        }
    };
    return CardsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardsComponent.prototype, "searchResults", void 0);
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cards',
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_wiki_service__["a" /* WikiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_wiki_service__["a" /* WikiService */]) === "function" && _a || Object])
], CardsComponent);

var _a;
//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wiki_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// description: This component is for the search box, button to submit search, or get random article



var SearchComponent = (function () {
    function SearchComponent(wiki, flashmessage) {
        this.wiki = wiki;
        this.flashmessage = flashmessage;
        this.emitSearchResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // Creates new EventEmitter to send as output to main app component
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.searchWiki = function () {
        var _this = this;
        if (this.input === undefined) {
            this.flashmessage.show('Please Enter a Search Term', { cssClass: 'alert-danger', timeout: 2500 }); // Will show flash message at top of page if no input in search box
        }
        else {
            // Subscribes to the getWikiArticle() service and uses input gathered from search box as input for search.
            this.wiki.getWikiArticle(this.input)
                .subscribe(function (data) {
                if (data.length > 0 && data[1].length > 0) {
                    _this.searchResults = []; // Sets searchResults object to empty to not append after previous search
                    // Creates and pushes an object since the data is in the form of 3 arrays with 10 results.
                    var j = 0;
                    while (j < data[1].length) {
                        var obj = { title: data[1][j], description: data[2][j], link: data[3][j] }; // Resets the object each time through while loop
                        _this.searchResults.push(obj); // Pushes the newly made object to the searchResults array.
                        j++;
                    }
                }
                else {
                    _this.flashmessage.show('Please Enter a Search Term', { cssClass: 'alert-danger', timeout: 2500 }); // If there isn't data, show a flashmessage
                }
                _this.sendSearchResultsToParent(); // Emits event to main app component when searchResults array is ready
            });
        }
    };
    // Subscribes to the getRandomWikiArticle() service to gather data from get request.
    // Since we're only getting one result, we don't use a while loop.
    SearchComponent.prototype.randomWiki = function () {
        var _this = this;
        this.wiki.getRandomWikiArticle()
            .subscribe(function (data) {
            _this.searchResults = []; // resets search results
            var articleid = Object.keys(data.query.pages)[0]; // gets article ID since that is needed for parsing and creating object.
            // Sets up object to be pushed to the searchResults array. It is a slightly more complicated request to parse.
            var obj = { title: data.query.pages[articleid].title, description: data.query.pages[articleid].extract, link: data.query.pages[articleid].fullurl };
            _this.searchResults.push(obj); // Pushes the newly made object to the searchResults array.
            _this.sendSearchResultsToParent(); // Emits event to main app component when searchResults array is ready
        });
    };
    // Function used for emitting the searchResults array to the main app component.
    SearchComponent.prototype.sendSearchResultsToParent = function () {
        this.emitSearchResults.emit(this.searchResults);
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SearchComponent.prototype, "emitSearchResults", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(163),
        styles: [__webpack_require__(158)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_wiki_service__["a" /* WikiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_wiki_service__["a" /* WikiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// description: Toolbar at the top of the page.

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.title = "Mean-Wiki-Viewer"; // Sets title of the page.
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(164),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.bundle.js.map