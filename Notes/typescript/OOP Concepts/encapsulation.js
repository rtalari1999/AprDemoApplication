var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank(bName, mName, mSalary) {
        this.bankName = 'SBI';
        this.bankName = bName;
        this.bManagerName = mName;
        this.mSalary = mSalary; //valid
        this.accountNumber;
    }
    Bank.prototype.show = function () {
        this.bManagerName;
        //this.bankName = "sbi";//invalid
        this.mSalary; //valid
        this.accountNumber;
        this.bankName;
        console.log(this.accountNumber, this.bManagerName, this.bankName, this.mSalary);
    };
    return Bank;
}());
var bank = new Bank('SBI', 'abc', 100000);
bank.bankName;
bank.bManagerName;
//bank.mSalary; //invalid
//bank.accountNumber;
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountNumber = 1234567890;
        return _this;
    }
    //override bankName: string = '';
    Customer.prototype.display = function () {
        this.bankName;
        this.bManagerName;
        // this.mSalary ;//invalid
        this.accountNumber;
        console.log('child', this.accountNumber, this.bManagerName, this.bankName);
    };
    return Customer;
}(Bank));
var customer = new Customer('SBI', 'abc', 100000);
customer.bManagerName;
customer.bankName;
customer.display();
customer.show();
//customer.mSalary;//invalid
//customer.accountNumber;// it is invalid becz protected variables can be accessed within the class and subclass but outside the class is not accessable.
