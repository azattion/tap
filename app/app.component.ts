import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import { HTTP_PROVIDERS }    from 'angular2/http';

import {FindingComponent} from './finding.component';
import {FindingOneComponent} from './finding-one.component';
import {FindingFormComponent} from './finding-form.component';

@Component({
    selector: 'my-app',
    template:`
      <a [routerLink]="['Finding']">Finding</a>
      <a [routerLink]="['FindingAdd']">Add Finding</a>
      <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/', name: 'Finding', component: FindingComponent},
    {path:'/:id', name: 'FindingOne', component: FindingOneComponent},
    {path:'/finding/add', name: 'FindingAdd', component: FindingFormComponent}
])

export class AppComponent { }
