import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Finding }    from './finding';
import {FindingService}       from './finding.service';

@Component({
    template: `
  <div [hidden]="!submitted">Success</div>
  <div [hidden]="submitted">
    <h1>Finding Form</h1>
    <form *ngIf="active" (ngSubmit)="onSubmit()" #findingForm="ngForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" required
          [(ngModel)]="model.title"
            ngControl="title"  #title="ngForm" >
        <div [hidden]="title.valid || title.pristine" class="alert alert-danger">
          Title is required
        </div>
      </div>

      <div class="form-group">
        <label for="text">Description</label>
        <textarea type="text" class="form-control"   [(ngModel)]="model.text"  ngControl="text" #text="ngForm"></textarea>
        <div [hidden]="text.valid || text.pristine" class="alert alert-danger">
          Text is required
        </div>
      </div>

      <div class="form-group">
        <label for="title">Phone</label>
        <input type="text" class="form-control" required
          [(ngModel)]="model.phone"
            ngControl="phone"  #phone="ngForm">
        <div [hidden]="phone.valid || phone.pristine" class="alert alert-danger">
          Phone is required
        </div>
      </div>

      <button type="submit" class="btn btn-default" [disabled]="!findingForm.form.valid">Submit</button>

    {{diagnostic}}
    </form>
  </div>`,
    providers: [FindingService]
})

export class FindingFormComponent {

    constructor (private _findingService: FindingService) {}

    model = new Finding(1, 'Razat ');

    submitted = false;

    errorMessage: string;
    finding:Finding[];

    onSubmit() {
        this.submitted = true;
        console.log(this.model);
        this.add(this.model.title);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    //get() {
    //    this._findingService.get()
    //        .subscribe(
    //            finding => this.finding = finding,
    //            error =>  this.errorMessage = <any>error);
    //}

    add(name:string) {
        if (!name) {
            return;
        }
        this._findingService.add(name)
            .subscribe(
                finding  => this.finding.push(finding),
                error =>  this.errorMessage = <any>error);
    }


    active = true;

    showFormControls(form:NgForm) {
        return form && form.controls['title'] &&
            form.controls['title'].value; // Dr. IQ
    }
}