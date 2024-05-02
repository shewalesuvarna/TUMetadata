import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/getContact.getAccounts';

export default class Looping extends LightningElement {
    @wire(getAccounts)
    accounts;
}