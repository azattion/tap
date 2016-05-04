import {Component, OnInit} from 'angular2/core';
import {Finding}              from './finding';
import {FindingService}       from './finding.service';


@Component({
    template: `
    <div class="row">
        <h2 class="col-md-12">Сейчас ищут</h2>
    </div>
    {{diagnostic}}
    <div class="col-md-4"  *ngFor="#find of finding">
        <a href="/{{find.id}}" class="thumbnail">
            <img src="http://static.akipress.org/127/.upload/doska/10/63510.jpg" alt="...">
        </a>
        <a href="/{{find.id}}">{{find.title}}</a>
     </div>
     `,
    providers: [FindingService]
})
export class FindingComponent {

    constructor (private _findingService: FindingService) {
        _findingService.finding
            .subscribe(
                finding => this.finding = finding,
                error => console.error('Error: ' + err),
                () => console.log('Completed!')
            );
    }

    //data = this.get();
    finding: Finding[];
    errorMessage: string;
    model = new Finding(1, 'Razat ');

    //get() {
    //    this._findingService.get()
    //        .subscribe(
    //            finding => this.finding = finding,
    //            error =>  this.errorMessage = <any>error);
    //    console.log(this.finding);
    //    //return this.data;
    //}
    get diagnostic() {
        return JSON.stringify(this.selected);
    }

    //getFinding() {
    //    _findingService.finding.subscribe(
    //        finding => this.finding = finding,
    //        () => console.log('Completed!')
    //    );
    //}
    //ngOnInit() {
    //    this.getFinding();
    //}

}
