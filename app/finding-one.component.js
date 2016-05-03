System.register(['angular2/core', './finding'], function(exports_1, context_1) {
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
    var core_1, finding_1;
    var FindingOneComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (finding_1_1) {
                finding_1 = finding_1_1;
            }],
        execute: function() {
            FindingOneComponent = (function () {
                function FindingOneComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', finding_1.Finding)
                ], FindingOneComponent.prototype, "finding", void 0);
                FindingOneComponent = __decorate([
                    core_1.Component({
                        selector: 'finding-detail',
                        template: "\n    <div *ngIf=\"FINDING\">\n      <h2>{{FINDING.title}} details!</h2>\n      <div><label>id: </label>{{FINDING.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"FINDING.title\" placeholder=\"title\"/>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FindingOneComponent);
                return FindingOneComponent;
            }());
            exports_1("FindingOneComponent", FindingOneComponent);
        }
    }
});
//# sourceMappingURL=finding-one.component.js.map