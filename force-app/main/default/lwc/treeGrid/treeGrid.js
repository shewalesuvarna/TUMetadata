import Type from '@salesforce/schema/Account.Type';
import { LightningElement,track } from 'lwc';
import getContactDetails from '@salesforce/apex/TreeGrid.getContactDetails' ;

export default class TreeGrid extends LightningElement {

   @track gridcolums =[
{
    type:'text',
    fieldName:'Name',
    label:'Name'
},
{
    type:'text',
    fieldName:'FirstName',
    label:' First Name'


},

{
    type:'text',
    fieldName:'LastName',
    label:'Last Name'

}

   ];
   @track griddata ;

connectedCallback()
{
    getContactDetails()
    .then(result  =>{
var tempContact = JSON.parse(JSON.stringify(result));

for(var i=0;i<tempContact.length;i++){

var nawContact = tempContact[i]['Contacts'];

if(nawContact){

tempContact[i]._children= nawContact ;
}
 
}

this.griddata=nawContact;
console.log("this.griddata"+JSON.stringify(this.griddata));

})
// .catch(error =>{
//     console.error(JSON.stringify(error));
// })
}


}