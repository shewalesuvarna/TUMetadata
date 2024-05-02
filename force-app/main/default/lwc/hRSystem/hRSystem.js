import { LightningElement, api, track } from 'lwc';
import HrOneAttendanceremark from '@salesforce/apex/HrOneAttendance.HrOneAttendanceremark';
import HrOneCheckOut from '@salesforce/apex/HrOneAttendance.HrOneCheckOut';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Attendance from '@salesforce/resourceUrl/Attendance'


export default class HRSystem extends LightningElement {

     Attendance = {
        id: 1,
        src: 'https://yourdomain.com/yourpath/Static%20Resource/Attendance.jpeg',
        href: 'https://stock.adobe.com/search?k=attendance&asset_id=469797034',
    }
    @api recordId;
    inputValue = '';
    markerVar = [];
    @track currentDateTime;
    @api sldsMAroundMedium = 'slds-m-around_medium';

    connectedCallback() {
        this.getCurrentDateTime();
        this.myCurrentLocationOnGoogleMap();
    }

    get formattedDateTime() {
        return this.currentDateTime;
    }

    getCurrentDateTime() {
        const currentDateObj = new Date();

        // Format date
        const optionsDate = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
        };
        const currentDate = currentDateObj.toLocaleString('en-US', optionsDate);

        // Format time
        const optionsTime = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        };
        const currentTime = currentDateObj.toLocaleString('en-US', optionsTime);

        this.currentDateTime = `${currentDate}, ${currentTime}`;
    }

    myCurrentLocationOnGoogleMap() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latVal = position.coords.latitude;
                const longVal = position.coords.longitude;
                this.markerVar = [{
                    location: {
                        Latitude: latVal,
                        Longitude: longVal
                    },
                    title: 'Your Current Location is here'
                }];
            });
        }
    }

    getInputValue(event) {
        this.inputValue = event.target.value;
    }

    checkin() {
        HrOneAttendanceremark({ currentRecordId: this.recordId, newvalue: this.inputValue })
            .then(result => {
                console.log('Update result:', result);
                this.showToastMessage('Success', 'Update Successfully', 'success');
                this.getCurrentDateTime();

                // Refresh the view
                const refreshView = new CustomEvent('refreshview');
                this.dispatchEvent(refreshView);
            })
            .catch(error => {
                console.error('Error updating record:', error);
                this.showToastMessage('Error', 'An error occurred during update', 'error');
            });
    }

    checkout() {
        HrOneCheckOut({ currentRecordId1: this.recordId })
            .then(result => {
                console.log('Update result:', result);
                this.showToastMessage('Success', 'Update Successfully', 'success');
                this.getCurrentDateTime();

                // Refresh the view
                const refreshView = new CustomEvent('refreshview');
                this.dispatchEvent(refreshView);
            })
            .catch(error => {
                console.error('Error updating record:', error);
                this.showToastMessage('Error', 'An error occurred during update', 'error');
            });
    }

    showToastMessage(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(event);
    }
}