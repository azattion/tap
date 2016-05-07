System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Observable_1;
    var FindingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            //import {Observable}     from 'rxjs/Observable';
            //import {Jsonp, URLSearchParams} from 'angular2/http';
            FindingService = (function () {
                function FindingService(http) {
                    this.http = http;
                    this._baseUrl = 'app/';
                }
                FindingService.prototype.getFindings = function () {
                    var _this = this;
                    if (this.finding) {
                        return Observable_1.Observable.create(function (observer) {
                            observer.next(_this.finding);
                            observer.complete();
                        });
                    }
                    else {
                        return this.http.get(this._baseUrl + 'finding.json').map(function (response) {
                            _this.states = response.json();
                            return _this.states;
                        })
                            .catch(this.handleError);
                    }
                };
                FindingService.prototype.getFinding = function (id) {
                    var _this = this;
                    if (this.finding) {
                        //filter using cached data
                        return this.findFindingObservable(id);
                    }
                    else {
                        //Query the existing customers to find the target customer
                        return Observable_1.Observable.create(function (observer) {
                            _this.getFindings().subscribe(function (customers) {
                                _this.finding = customers;
                                var cust = _this.filterFindings(id);
                                observer.next(cust);
                                observer.complete();
                            });
                        })
                            .catch(this.handleError);
                    }
                };
                FindingService.prototype.findFindingObservable = function (id) {
                    return this.createObservable(this.filterFindings(id));
                };
                FindingService.prototype.filterFindings = function (id) {
                    var custs = this.finding.filter(function (cust) { return cust.id === id; });
                    return (custs.length) ? custs[0] : null;
                };
                FindingService.prototype.createObservable = function (data) {
                    return Observable_1.Observable.create(function (observer) {
                        observer.next(data);
                        observer.complete();
                    });
                };
                FindingService.prototype.add = function (name) {
                    var body = JSON.stringify({ name: name });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._baseUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                //search (term: string) {
                //    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
                //    var params = new URLSearchParams();
                //    params.set('search', term); // the user's search value
                //    params.set('action', 'opensearch');
                //    params.set('format', 'json');
                //    params.set('callback', 'JSONP_CALLBACK');
                //    // TODO: Add error handling
                //    return this.jsonp
                //        .get(wikiUrl, { search: params })
                //        .map(request => <string[]> request.json()[1]);
                //}
                FindingService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                FindingService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                FindingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FindingService);
                return FindingService;
            }());
            exports_1("FindingService", FindingService);
        }
    }
});
//# sourceMappingURL=finding.service.js.map