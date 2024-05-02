import { LightningElement,api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseEditRecord extends LightningElement {
    @api recordId; 

    handleSuccess( event ) { 
         
        const toastEvent = new ShowToastEvent({ 
            title: 'Case Updated', 
            message: 'Case Updated Successfully!!!', 
            variant: 'success' 
        }); 
        this.dispatchEvent( toastEvent ); 
 
    }
}