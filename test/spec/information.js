/*global describe, it, expect */
/*global define*/

define(['../../app/js/information/information'], function (information) {
    "use strict";

    describe('The information model', function () {

        it('should be itself.', function () {
            expect(information).to.equal(information);
        });

    });

});
