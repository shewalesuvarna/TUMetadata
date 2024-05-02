import { LightningElement,track,wire,api} from 'lwc';
import getContactList from '@salesforce/apex/ContactDatabase.getContactList';

const columns = [

    {label : 'Name', fieldName :'Name'},
    {label:'Phone', fieldName:'Phone'}
]
export default class DataTableWithRowSelection extends LightningElement {
    
    
 @track ShowMe='show Contact';
@track  isvisible= false;
@track columns = columns;
@track data = [];
@api recordId;
@api SearchKey='';
// get related contact list calling from apex class

connectedCallback(){
    //calling the apex method
    getContactList({lwcrecord: this.recordId})
    .then (response=>{
        this.data = response ;

    })
    .catch(err=>{
        coconsole.log("Error occured"+err);
    })


}
// // search functionality
handlesearch(event)
{
 this.SearchKey= event.target.value; 
 // pass the searchkey to getcontact method
 getContactList({SearchKeys : this.SearchKey, lwcrecord : this.recordId})
 .then(res =>{
     this.data =res;
 })
 .catch(err =>{
     console.log("Error Occured"+err); 
 })

}
//show and hide button
    HandleContact(event)
{
 const label= event.target.label;
 if(label === 'show Contact')
 {
     this.ShowMe ='Hide Contact';
     this.isvisible= true;

 }
 else if(label === 'Hide Contact')
 {
   this.ShowMe ='show Contact';
    this.isvisible = false;   
 }
 
}
// get details of selected row
getSelectedRows(event)
{
    const getSelectedRowsData = event.details.SelectedRows;
    window.alert(JSON.stringify(getSelectedRowsData));
}


}