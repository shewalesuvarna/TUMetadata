import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ImperativeToCreateRecord extends LightningElement {
    accn;
    accph;

    accName(event) {
        this.accn = event.target.value;
    }

    AccPhone(event) {
        this.accph = event.target.value;
    }

    Saveme(event) {
        // Step 1: Get fields
        const fields = { 'Name': this.accn, 'Phone': this.accph };

        console.log('Fields:', fields); // Debug statement

        // Step 2: Get account object and fields
        const recordInput = { apiName: 'Account', fields };

        console.log('Record Input:', recordInput); // Debug statement

        // Step 3: Create record
        createRecord(recordInput)
            .then(response => {
                console.log('Record Creation Response:', response); // Debug statement

                const evt = new ShowToastEvent({
                    title: 'Record Creation',
                    message: 'Record created successfully',
                    variant: 'success',
                });
                this.dispatchEvent(evt);
            })
            .catch(error => {
                console.error('Record Creation Error:', error); // Debug statement

                const evt = new ShowToastEvent({
                    title: 'Record Creation Failed',
                    message: 'Account record creation failed',
                    variant: 'error',
                });
                this.dispatchEvent(evt);
            });
    }
}