// hrOneAttendance.js
import { LightningElement, track } from 'lwc';

export default class HrOneAttendance extends LightningElement {
    @track currentDateTime;

    connectedCallback() {
        this.getCurrentDateTime();
    }

    getCurrentDateTime() {
        const currentDateObj = new Date();

        // Format date as per your requirement (e.g., MM/DD/YYYY)
        const currentDate = `${currentDateObj.getMonth() + 1}/${currentDateObj.getDate()}/${currentDateObj.getFullYear()}`;

        // Format time as per your requirement (e.g., HH:MM:SS)
        const currentTime = `${currentDateObj.getHours()}:${currentDateObj.getMinutes()}:${currentDateObj.getSeconds()}`;

        // Combine date and time
        this.currentDateTime = `${currentDate} ${currentTime}`;
    }
}