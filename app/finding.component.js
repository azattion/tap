System.register(['angular2/core', './finding.service', './finding-one.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, finding_service_1, finding_one_component_1;
    var FindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (finding_service_1_1) {
                finding_service_1 = finding_service_1_1;
            },
            function (finding_one_component_1_1) {
                finding_one_component_1 = finding_one_component_1_1;
            }],
        execute: function() {
            FindingComponent = (function () {
                function FindingComponent(_findingService) {
                    this._findingService = _findingService;
                    this.FINDING = this.get();
                }
                FindingComponent.prototype.onSelect = function (finding) {
                    console.log(this.selected);
                    this.selected = finding;
                };
                FindingComponent.prototype.get = function () {
                    var _this = this;
                    this._findingService.get()
                        .subscribe(function (finding) { return _this.finding = finding; }, function (error) { return _this.errorMessage = error; });
                    console.log(this.finding);
                };
                FindingComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"row\">\n        <h2 class=\"col-md-12\">\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0449\u0443\u0442</h2>\n    </div>\n    <div class=\"col-md-4\"  *ngFor=\"#find of FINDING\">\n        <a href=\"#\" class=\"thumbnail\">\n            <img src=\"http://static.akipress.org/127/.upload/doska/10/63510.jpg\" alt=\"...\">\n        </a>\n        <a [class.selected]=\"finding === selected\"\n        (click)=\"onSelect(find)\">{{find.title}}</a>\n     </div>\n     <finding-detail [finding]=\"selected\"></finding-detail>\n     ",
                        directives: [finding_one_component_1.FindingOneComponent],
                        providers: [finding_service_1.FindingService]
                    }), 
                    __metadata('design:paramtypes', [finding_service_1.FindingService])
                ], FindingComponent);
                return FindingComponent;
            })();
            exports_1("FindingComponent", FindingComponent);
        }
    }
});
//var FINDING: Finding[] = [
//    { "id": 11, "title": "Mr. Nice" },
//    { "id": 12, "title": "Narco" },
//    { "id": 13, "title": "Bombasto" },
//    { "id": 14, "title": "Celeritas" },
//    { "id": 15, "title": "Magneta" },
//    { "id": 16, "title": "RubberMan" },
//    { "id": 17, "title": "Dynama" },
//    { "id": 18, "title": "Dr IQ" },
//    { "id": 19, "title": "Magma" },
//    { "id": 20, "title": "Tornado" },
//    { "id": 1, "title": "Windstorm" },
//    { "id": 2, "title": "Bombasto" },
//    { "id": 3, "title": "Magneta" },
//    { "id": 4, "title": "Tornado" }
//];
//# sourceMappingURL=finding.component.js.map