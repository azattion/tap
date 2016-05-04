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
    var FindingComponent;
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
            FindingComponent = (function () {
                function FindingComponent(_findingService) {
                    var _this = this;
                    this._findingService = _findingService;
                    this.model = new finding_1.Finding(1, 'Razat ');
                    _findingService.finding
                        .subscribe(function (finding) { return _this.finding = finding; }, function (error) { return console.error('Error: ' + err); }, function () { return console.log('Completed!'); });
                }
                Object.defineProperty(FindingComponent.prototype, "diagnostic", {
                    //get() {
                    //    this._findingService.get()
                    //        .subscribe(
                    //            finding => this.finding = finding,
                    //            error =>  this.errorMessage = <any>error);
                    //    console.log(this.finding);
                    //    //return this.data;
                    //}
                    get: function () {
                        return JSON.stringify(this.selected);
                    },
                    enumerable: true,
                    configurable: true
                });
                FindingComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"row\">\n        <h2 class=\"col-md-12\">\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0449\u0443\u0442</h2>\n    </div>\n    {{diagnostic}}\n    <div class=\"col-md-4\"  *ngFor=\"#find of finding\">\n        <a href=\"/{{find.id}}\" class=\"thumbnail\">\n            <img src=\"http://static.akipress.org/127/.upload/doska/10/63510.jpg\" alt=\"...\">\n        </a>\n        <a href=\"/{{find.id}}\">{{find.title}}</a>\n     </div>\n     ",
                        providers: [finding_service_1.FindingService]
                    }), 
                    __metadata('design:paramtypes', [finding_service_1.FindingService])
                ], FindingComponent);
                return FindingComponent;
            }());
            exports_1("FindingComponent", FindingComponent);
        }
    }
});
//# sourceMappingURL=finding.component.js.map