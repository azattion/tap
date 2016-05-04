System.register(['angular2/core', './finding', './finding.service'], function(exports_1) {
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
    var FindingOneComponent;
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
            FindingOneComponent = (function () {
                function FindingOneComponent(_findingService) {
                    var _this = this;
                    this._findingService = _findingService;
                    _findingService.finding
                        .subscribe(function (finding) { return _this.finding = finding; }, function (error) { return console.error('Error: ' + err); }, function () { return console.log('Completed!', _this.finding); });
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', finding_1.Finding)
                ], FindingOneComponent.prototype, "finding", void 0);
                FindingOneComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div *ngIf=\"finding\" class=\"col-md-12\">\n        <h2>{{finding.title}}</h2>\n        <a href=\"/{{finding.id}}\" class=\"thumbnail\">\n            <img src=\"http://static.akipress.org/127/.upload/doska/10/63510.jpg\" alt=\"...\">\n        </a>\n        <a [class.selected]=\"finding === selected\"\n        (click)=\"onSelect(find)\">{{finding.title}}</a>\n     </div>\n     <div *ngIf=\"finding\">\n      <div><label>id: </label>{{finding.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"finding.title\" placeholder=\"title\"/>\n      </div>\n    </div>\n  ",
                        providers: [finding_service_1.FindingService]
                    }), 
                    __metadata('design:paramtypes', [finding_service_1.FindingService])
                ], FindingOneComponent);
                return FindingOneComponent;
            })();
            exports_1("FindingOneComponent", FindingOneComponent);
        }
    }
});
//# sourceMappingURL=finding-one.component.js.map