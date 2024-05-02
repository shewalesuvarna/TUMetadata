import { LightningElement, api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class DeleteImperative extends NavigationMixin(LightningElement) {
@api recordId;
onDelete(event) {
        deleteRecord(this.recordId)
            .then(() => {
                // Record deleted successfully, show success message
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record deleted',
                        variant: 'success'
                    })
                );
                // Optionally navigate to a different page after deletion
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Account',
                        actionName: 'home',
                    },
                });
            })
            .catch(error => {
                // Error occurred while deleting record
                console.error('Error deleting record:', error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'Failed to delete record',
                        variant: 'error'
                    })
                );
            });
    }
    recordPageUrl;

}