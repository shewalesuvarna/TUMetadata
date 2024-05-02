import { LightningElement, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import searchAccounts from '@salesforce/apex/SearchRecord.searchAccounts';
import { refreshApex } from '@salesforce/apex';
import First_Name from '@salesforce/schema/Account.Name';
import Id from '@salesforce/schema/Account.Id';

const columns = [{ label: 'Name', fieldName: 'Name', editable: true }];

export default class UpdateImperative extends LightningElement {
    col = columns;
    inputText;
    draftValues=[];

    input(event) {
        this.inputText = event.target.value;
        this.refreshAccounts();
    }

    @wire(searchAccounts, { searchKeyword: '$inputText' }) sks;
//step 1
    handleSave(event) {
        const fields = {};
        fields[Id.fieldApiName] = event.detail.draftValues[0].Id;
        fields[First_Name.fieldApiName] = event.detail.draftValues[0].Name;
//step2
        const recordInput = { fields};
//step 3
        updateRecord(recordInput)
            .then(result => {
                window.alert('Record updated successfully');
                // Optionally, refresh the wired data
                this.draftValues=[];
                return refreshApex(this.sks);
            })
            .catch(error => {
                console.error('Error updating record:', error);
            });
    }
}