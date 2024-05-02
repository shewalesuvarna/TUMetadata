import { LightningElement, wire } from 'lwc';
import showAcc from '@salesforce/apex/CallLWC.ShowAcc';

export default class DataTable extends LightningElement {
    columnData = [
        { label: "Account Name", fieldName: "Name", type: "text" },
        { label: "Phone", fieldName: "Phone", type: "phone" }, 
        { label: "Fax", fieldName: "Fax", type: "phone" }
    ];

    @wire(showAcc)
    mydata;
}