import {Component, Input} from 'angular2/core';
import {Finding} from './finding';
import {FindingService}       from './finding.service';

@Component({
    template: `
    <div *ngIf="finding" class="col-md-12">
        <h2>{{finding.title}}</h2>
        <a href="/{{finding.id}}" class="thumbnail">
            <img src="http://static.akipress.org/127/.upload/doska/10/63510.jpg" alt="...">
        </a>
        <a [class.selected]="finding === selected"
        (click)="onSelect(find)">{{finding.title}}</a>
     </div>
     <div *ngIf="finding">
      <div><label>id: </label>{{finding.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="finding.title" placeholder="title"/>
      </div>
    </div>
  `,
    providers: [FindingService]
})

export class FindingOneComponent {
    @Input()
    finding: Finding;

    constructor (private _findingService: FindingService) {
        _findingService.finding
            .subscribe(
                finding => this.finding = finding,
                error => console.error('Error: ' + err),
                () => console.log('Completed!', this.finding)
            );
    }
}
