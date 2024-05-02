import { LightningElement, track } from 'lwc';

export default class CurrentDateTimeComponent extends LightningElement {
    @track currentDateTime;

    connectedCallback() {
        // Set the current system date and time when the component is initialized
        this.getCurrentDateTime();
    }

    getCurrentDateTime() {
        const now = new Date();
        this.currentDateTime = now.toLocaleString(); // Display date and time in a readable format
    }
}