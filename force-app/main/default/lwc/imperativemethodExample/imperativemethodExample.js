import { LightningElement,track } from 'lwc';
import getFlightData from '@salesforce/apex/ImperativeMethodExample.getFlightData';
const columns = [

    {label : 'ID', fieldName :'Name' },
    {label:'Flight', fieldName:'Flight_Name__c'},
    
    
    ];
    

export default class ImperativemethodExample extends LightningElement {
   
       
            @track columns = columns ;
            @track data = [];
            connectedCallback()
            {
                getFlightData()  // imperative method/ returns the promisses
                .then(result => {

                    this.data=result;
                })
                .catch(error =>{
                {
                    console.log("Error occured");
                }
            })
            }
        
            
        
            }