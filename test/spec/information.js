/*global describe, it, beforeEach, expect */
/*global app*/

(function () {
    "use strict";

    describe('The information model', function () {

        var info;

        beforeEach(function() {
            info = app.information;
        });

        it('should be itself.', function () {
            expect(info).to.equal(info);
        });

    });

}());