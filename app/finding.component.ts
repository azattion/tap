import {Component, OnInit} from 'angular2/core';
import {Finding}              from './finding';
import {FindingService}       from './finding.service';


@Component({
    template: `
    <div class="row">
        <h2 class="col-md-12">Сейчас ищут</h2>
    </div>
    <div class="col-md-4" *ngFor="#i of [1,2,3,4,5,6,7,9]">
                    <a href="#" class="thumbnail">
                        <img src="http://static.akipress.org/127/.upload/doska/10/63510.jpg" alt="...">
                    </a>
                </div>
                `
})
export class FindingComponent {
}