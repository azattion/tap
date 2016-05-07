import {Component, Input, OnInit} from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import {Finding} from './finding';
import {FindingService}       from './finding.service';

@Component({
    template: `
    <div *ngIf="finding" class="col-md-12">
        <h2>{{finding.title}}</h2>
        <a href="#" class="thumbnail">
            <img src="http://static.akipress.org/127/.upload/doska/10/63510.jpg" alt="...">
       {{finding.title}}</a>
     </div>
     <div *ngIf="finding">
      <div><label>id: </label>{{finding.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="finding.title" placeholder="title"/>
      </div>
    </div>
  `,
    providers: [FindingService],
    directives: [ ROUTER_DIRECTIVES ]
})

export class FindingOneComponent implements OnInit{

    finding: Finding;

    constructor(private _routeParams: RouteParams, private findingService: FindingService) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.findingService.getFinding(id)
            .subscribe((finding: Finding) => this.finding = finding);

        //this.service.getHero(id).then(hero => this.hero = hero);
    }
}
