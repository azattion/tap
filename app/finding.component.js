System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FindingComponent = (function () {
                function FindingComponent() {
                }
                FindingComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"row\">\n        <h2 class=\"col-md-12\">\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0449\u0443\u0442</h2>\n    </div>\n    <div class=\"col-md-4\" *ngFor=\"#i of [1,2,3,4,5,6,7,9]\">\n                    <a href=\"#\" class=\"thumbnail\">\n                        <img src=\"http://static.akipress.org/127/.upload/doska/10/63510.jpg\" alt=\"...\">\n                    </a>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FindingComponent);
                return FindingComponent;
            })();
            exports_1("FindingComponent", FindingComponent);
        }
    }
});
//# sourceMappingURL=finding.component.js.map