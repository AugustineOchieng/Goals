import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
var StrikethroughDirective = /** @class */ (function () {
    function StrikethroughDirective(elem) {
        this.elem = elem;
    }
    StrikethroughDirective.prototype.onClicks = function () {
        this.textDeco("line-through");
    };
    StrikethroughDirective.prototype.onDoubleClicks = function () {
        this.textDeco("None");
    };
    StrikethroughDirective.prototype.textDeco = function (action) {
        this.elem.nativeElement.style.textDecoration = action;
    };
    tslib_1.__decorate([
        HostListener("click"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], StrikethroughDirective.prototype, "onClicks", null);
    tslib_1.__decorate([
        HostListener("dblclick"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], StrikethroughDirective.prototype, "onDoubleClicks", null);
    StrikethroughDirective = tslib_1.__decorate([
        Directive({
            selector: '[appStrikethrough]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], StrikethroughDirective);
    return StrikethroughDirective;
}());
export { StrikethroughDirective };
//# sourceMappingURL=strikethrough.directive.js.map