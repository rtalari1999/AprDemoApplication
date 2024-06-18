class Bank {
    readonly bankName : string = 'SBI';
   public bManagerName : string;
   private mSalary : number;
    protected accountNumber! : number;


    constructor(bName: string, mName: string, mSalary: number){
        this.bankName =  bName;
        this.bManagerName = mName;
        this.mSalary = mSalary;//valid
        this.accountNumber;
    }


    show(){
        this.bManagerName;
        //this.bankName = "sbi";//invalid
        this.mSalary;//valid
        this.accountNumber;
        this.bankName;
        console.log(this.accountNumber, this.bManagerName, this.bankName, this.mSalary);
    }

}
var bank = new Bank('SBI', 'abc', 100000);
bank.bankName;
bank.bManagerName;
//bank.mSalary; //invalid
//bank.accountNumber;

class Customer extends Bank{
    protected override accountNumber: number = 1234567890;

    //override bankName: string = '';
    display(){
        this.bankName ;
        this.bManagerName;
       // this.mSalary ;//invalid
        this.accountNumber;
        console.log('child',this.accountNumber, this.bManagerName, this.bankName);
    }

}

var customer = new Customer('SBI', 'abc', 100000);
customer.bManagerName;
customer.bankName;
customer.display();
customer.show();
//customer.mSalary;//invalid
//customer.accountNumber;// it is invalid becz protected variables can be accessed within the class and subclass but outside the class is not accessable.
