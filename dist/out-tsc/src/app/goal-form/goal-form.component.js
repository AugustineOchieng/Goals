import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
var GoalFormComponent = /** @class */ (function () {
    function GoalFormComponent() {
        this.newGoal = new Goal(0, "", "", new Date());
        this.addGoal = new EventEmitter();
    }
    GoalFormComponent.prototype.submitGoal = function () {
        this.addGoal.emit(this.newGoal);
    };
    GoalFormComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], GoalFormComponent.prototype, "addGoal", void 0);
    GoalFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-goal-form',
            templateUrl: './goal-form.component.html',
            styleUrls: ['./goal-form.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalFormComponent);
    return GoalFormComponent;
}());
export { GoalFormComponent };
//# sourceMappingURL=goal-form.component.js.map