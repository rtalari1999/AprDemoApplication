/*
WHat is Abstract in Typescript?
================================

*/
// abstract is a keyword
// how, where and why to use abstract.
var AParent = /** @class */ (function () {
    function AParent() {
        this.fName = 'john';
        this.lName = 'Dee';
    }
    AParent.prototype.display = function () {
        console.log(this.fName + this.lName);
    };
    return AParent;
}());
var aparent = new AParent();
aparent.display();
