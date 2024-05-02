import { LightningElement, wire } from 'lwc';
import showAcc from '@salesforce/apex/CallApexInLWC.ShowAcc';

export default class CallApexTutorial extends LightningElement {
    @wire(showAcc)
    myData;
}