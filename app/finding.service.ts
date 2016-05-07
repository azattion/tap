import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';

import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {Finding}        from './finding';
import {IState } from './interface';
//import {Observable}     from 'rxjs/Observable';


//import {Jsonp, URLSearchParams} from 'angular2/http';

@Injectable()
export class FindingService {

    finding:Finding[];
    states: IState[];
    private _baseUrl = 'app/';

    constructor(private http:Http) {}

    getFindings(): Observable<Finding[]> {
        if (this.finding) {
            return Observable.create((observer: Observer<Finding[]>) => {
                observer.next(this.finding);
                observer.complete();
            });
        } else {
            return this.http.get(this._baseUrl + 'finding.json').map((response: Response) => {
                    this.states = response.json();
                    return this.states;
                })
                .catch(this.handleError);
        }
    }

    getFinding(id: number) : Observable<Finding> {
        if (this.finding) {
            //filter using cached data
            return this.findFindingObservable(id);
        } else {
            //Query the existing customers to find the target customer
            return Observable.create((observer: Observer<Finding>) => {
                    this.getFindings().subscribe((customers: Finding[]) => {
                        this.finding = customers;
                        const cust = this.filterFindings(id);
                        observer.next(cust);
                        observer.complete();
                    })
                })
                .catch(this.handleError);
        }
    }

    private findFindingObservable(id: number) : Observable<Finding> {
        return this.createObservable(this.filterFindings(id));
    }

    private filterFindings(id: number) : Finding {
        const custs = this.finding.filter((cust) => cust.id === id);
        return (custs.length) ? custs[0] : null;
    }
    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    add (name: string): Observable<Finding>  {

        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._baseUrl, body, options)
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
