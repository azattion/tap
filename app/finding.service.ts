import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';

import {Finding}        from './finding';
import {Observable}     from 'rxjs/Observable';

//import {Jsonp, URLSearchParams} from 'angular2/http';

@Injectable()
export class FindingService {

    constructor(http:Http) {
        this.finding = http.get('app/finding.json')
            .map(response => response.json());
    }

    private _Url = 'app/finding.json';
    // URL to web api

    get (): Observable<Finding[]> {
        return this.http.get(this._Url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    add (name: string): Observable<Finding>  {

        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._Url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

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

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
