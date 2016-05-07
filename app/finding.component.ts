import {Component, OnInit} from 'angular2/core';
import {Finding}              from './finding';
import {FindingService}       from './finding.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    template: `
    <div class="row">
        <h2 class="col-md-12">Сейчас ищут</h2>
    </div>
    <div class="col-md-4"  *ngFor="#find of finding">
        <a [routerLink]="['FindingOne', {id: find.id}]" class="thumbnail">
            <img style="max-width: 100%" src="http://static.akipress.org/127/.upload/doska/10/63510.jpg" alt="...">
        {{find.title}}</a>
     </div>
     `,
    providers: [FindingService],
    directives: [ROUTER_DIRECTIVES]
})
export class FindingComponent implements OnInit {

    constructor(private _findingService:FindingService) {
    }

    //data = this.get();
    //finding:Finding[];
    finding: Finding[] = [];
    errorMessage:string;
    model = new Finding(1, 'Razat ');

    ngOnInit() {
        this._findingService.getFindings()
            .subscribe((finding:Finding[]) => {
                this.finding = finding;
            });

    }

    //get() {
    //    this._findingService.get()
    //        .subscribe(
    //            finding => this.finding = finding,
    //            error =>  this.errorMessage = <any>error);
    //    console.log(this.finding);
    //    //return this.data;
    //}
    //get diagnostic() {
    //    return JSON.stringify(this.selected);
    //}

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
