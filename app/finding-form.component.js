System.register(['angular2/core', './finding', './finding.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, finding_1, finding_service_1;
    var FindingFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (finding_1_1) {
                finding_1 = finding_1_1;
            },
            function (finding_service_1_1) {
                finding_service_1 = finding_service_1_1;
            }],
        execute: function() {
            FindingFormComponent = (function () {
                function FindingFormComponent(_findingService) {
                    this._findingService = _findingService;
                    this.model = new finding_1.Finding(1, 'Razat ', 'Chuck Overstreet', '+996 700 75 56 35');
                    this.submitted = false;
                    this.active = true;
                }
                FindingFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    console.log(this.model);
                    this.add(this.model.title);
                };
                Object.defineProperty(FindingFormComponent.prototype, "diagnostic", {
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                FindingFormComponent.prototype.get = function () {
                    var _this = this;
                    this._findingService.get()
                        .subscribe(function (finding) { return _this.finding = finding; }, function (error) { return _this.errorMessage = error; });
                };
                FindingFormComponent.prototype.add = function (name) {
                    var _this = this;
                    if (!name) {
                        return;
                    }
                    this._findingService.add(name)
                        .subscribe(function (finding) { return _this.finding.push(finding); }, function (error) { return _this.errorMessage = error; });
                };
                FindingFormComponent.prototype.showFormControls = function (form) {
                    return form && form.controls['title'] &&
                        form.controls['title'].value; // Dr. IQ
                };
                FindingFormComponent = __decorate([
                    core_1.Component({
                        template: "\n  <div [hidden]=\"!submitted\">Success</div>\n  <div [hidden]=\"submitted\">\n    <h1>Finding Form</h1>\n    <form *ngIf=\"active\" (ngSubmit)=\"onSubmit()\" #findingForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" required\n          [(ngModel)]=\"model.title\"\n            ngControl=\"title\"  #title=\"ngForm\" >\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n          Title is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"text\">Description</label>\n        <textarea type=\"text\" class=\"form-control\"   [(ngModel)]=\"model.text\"  ngControl=\"text\" #text=\"ngForm\"></textarea>\n        <div [hidden]=\"text.valid || text.pristine\" class=\"alert alert-danger\">\n          Text is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"title\">Phone</label>\n        <input type=\"text\" class=\"form-control\" required\n          [(ngModel)]=\"model.phone\"\n            ngControl=\"phone\"  #phone=\"ngForm\">\n        <div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\">\n          Phone is required\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!findingForm.form.valid\">Submit</button>\n\n    {{diagnostic}}\n    </form>\n  </div>",
                        providers: [finding_service_1.FindingService]
                    }), 
                    __metadata('design:paramtypes', [finding_service_1.FindingService])
                ], FindingFormComponent);
                return FindingFormComponent;
            }());
            exports_1("FindingFormComponent", FindingFormComponent);
        }
    }
});
//# sourceMappingURL=finding-form.component.js.map