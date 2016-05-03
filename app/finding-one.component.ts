import {Component, Input} from 'angular2/core';
import {Finding} from './finding';

@Component({
    selector: 'finding-detail',
    template: `
    <div *ngIf="FINDING">
      <h2>{{FINDING.title}} details!</h2>
      <div><label>id: </label>{{FINDING.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="FINDING.title" placeholder="title"/>
      </div>
    </div>
  `
})

export class FindingOneComponent {
    @Input()
    finding: Finding;
}
