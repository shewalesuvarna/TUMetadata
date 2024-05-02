import { LightningElement } from 'lwc';
import PLAYER_OBJECT from '@salesforce/schema/Players__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordForm extends LightningElement {

    objectApiName = PLAYER_OBJECT;
    
    handleSuccess( event ) { 
      const toastEvent = new ShowToastEvent({ 
          title: 'player created', 
          message: 'player created Successfully!!!', 
          variant: 'success' 
      }); 
      this.dispatchEvent( toastEvent ); 

  }


}