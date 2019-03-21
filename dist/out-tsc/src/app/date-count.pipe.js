import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date();
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime);
        var secondsInADay = 86400;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    DateCountPipe = tslib_1.__decorate([
        Pipe({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());
export { DateCountPipe };
//# sourceMappingURL=date-count.pipe.js.map