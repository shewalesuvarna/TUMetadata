import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; // for toast notification
import ACCOUNT_OBJECT from '@salesforce/schema/Account';  // import object
import AC_NAME from '@salesforce/schema/Account.Name';  // import fields
import AC_WEBSITE from '@salesforce/schema/Account.Website';
import AC_NUMBER from '@salesforce/schema/Account.AccountNumber';
import AC_INDUSTRY from '@salesforce/schema/Account.Industry';
import AC_RATING from '@salesforce/schema/Account.Rating';
import AC_PHONE from '@salesforce/schema/Account.Phone';
import AC_TYPE from '@salesforce/schema/Account.Type';
export default class AccountCreator extends LightningElement {
accountObject = ACCOUNT_OBJECT;  // object type
accountFields = [AC_NAME, AC_WEBSITE,AC_NUMBER, AC_INDUSTRY, AC_RATING, AC_PHONE, AC_TYPE]; // fields to be showin in form
// shows toast message after account creation
handleAccountCreated(event){
    // Run code when account is created.
    const showSuccess = new ShowToastEvent({
        title: 'Success!!',
        message: 'Account has been created',
        variant: 'Success',
    });
    this.dispatchEvent(showSuccess);
}
}