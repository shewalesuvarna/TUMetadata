import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACCOUNT_FAX_FIELD from '@salesforce/schema/Account.Fax';

export default class RecordFormForSelectedField extends LightningElement {
    @api recordId;
    myFields = [ACCOUNT_NAME_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_FAX_FIELD];
}