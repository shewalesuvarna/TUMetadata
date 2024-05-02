import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PLAYER_OBJECT from '@salesforce/schema/Players__c';
import  PLAYR_NAME from '@salesforce/schema/Players__c.Name';
import PLAYER_GOAL from '@salesforce/schema/Players__c.Goals__c';
import PLAYER_CLUB from '@salesforce/schema/Players__c.Football_club__c';
 export default class RecordEditForm extends LightningElement {
    objectApiName = PLAYER_OBJECT;
    nameField =   PLAYR_NAME;
    GoalField = PLAYER_GOAL ;
    ClubField = PLAYER_CLUB;
    playerId='player created';

    handleSuccess( event ) { 
          this.playerId =event.detail.id;   /// record id will be display
        const toastEvent = new ShowToastEvent({ 
            title: 'player created', 
            message: 'player created Successfully!!!', 
            variant: 'success' 
        }); 
        this.dispatchEvent( toastEvent ); 
 
    }

}