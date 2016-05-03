import {Component, OnInit} from 'angular2/core';
import {Finding}              from './finding';
import {FindingService}       from './finding.service';
import {FindingOneComponent} from './finding-one.component';


@Component({
    template: `
    <div class="row">
        <h2 class="col-md-12">Сейчас ищут</h2>
    </div>
    <div class="col-md-4"  *ngFor="#find of FINDING">
        <a href="#" class="thumbnail">
            <img src="http://static.akipress.org/127/.upload/doska/10/63510.jpg" alt="...">
        </a>
        <a [class.selected]="finding === selected"
        (click)="onSelect(find)">{{find.title}}</a>
     </div>
     <finding-detail [finding]="selected"></finding-detail>
     `,
    directives: [FindingOneComponent],
    providers: [FindingService]
})
export class FindingComponent {

    constructor (private _findingService: FindingService) {}

    selected: Finding;
    FINDING = this.get();
    finding: Finding[];
    errorMessage: string;

    onSelect(finding:Finding) {
        console.log(this.selected);
        this.selected = finding;
    }
    get() {
        this._findingService.get()
            .subscribe(
                finding => this.finding = finding,
                error =>  this.errorMessage = <any>error);
        console.log(this.finding);
    }
}

//var FINDING: Finding[] = [
//    { "id": 11, "title": "Mr. Nice" },
//    { "id": 12, "title": "Narco" },
//    { "id": 13, "title": "Bombasto" },
//    { "id": 14, "title": "Celeritas" },
//    { "id": 15, "title": "Magneta" },
//    { "id": 16, "title": "RubberMan" },
//    { "id": 17, "title": "Dynama" },
//    { "id": 18, "title": "Dr IQ" },
//    { "id": 19, "title": "Magma" },
//    { "id": 20, "title": "Tornado" },
//    { "id": 1, "title": "Windstorm" },
//    { "id": 2, "title": "Bombasto" },
//    { "id": 3, "title": "Magneta" },
//    { "id": 4, "title": "Tornado" }
//];
