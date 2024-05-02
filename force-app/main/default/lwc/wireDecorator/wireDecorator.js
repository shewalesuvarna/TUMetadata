import { LightningElement, track, wire } from 'lwc';
import getFlightList from '@salesforce/apex/WireDemo.getFlightList';
const columns = [

{label : 'ID', fieldName :'Name' },
{label:'Flight', fieldName:'Flight_Name__c'}


];

export default class WireDecorator extends LightningElement {
    @track columns = columns;
    @track data = [];
    @wire(getFlightList)  
    getFlightList1({ data, error }) {
        if (data) {
            this.data = data;
        }
        else if (error) {
            console.log('error occured');
        }

    }

    getSelectedRows(event)
    {
        const getSelectedRowsData = event.details.SelectedRows;
        window.alert(getSelectedRowsData);
    }
    
}