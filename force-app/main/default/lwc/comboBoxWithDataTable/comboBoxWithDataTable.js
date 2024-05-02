import { LightningElement,track} from 'lwc';
import getAccountData  from '@salesforce/apex/ComboBoxwithDataTable.getAccountData';
import getContact from '@salesforce/apex/ComboBoxwithDataTable.getContact';
import EmailPreferencesStayInTouchReminder from '@salesforce/schema/User.EmailPreferencesStayInTouchReminder';
// define column in data table
const columns =[    // create object

    {label:'Contact Name', fieldName:'Name'},
    {label:'Contact Email', fieldName:'Email'},


]
export default class ComboBoxWithDataTable extends LightningElement {
@track value ='';
@track arrvalue =[]; // this array will store the option for comboBox
@track IsVisible=false ; // use for show and hide functionality
@track data=[]; // use to store contact datd in databse table
@track columns =columns;
//store the option by returning the opthion array
get options() {
    return this.arrvalue;
}

connectedCallback() {
    //call apex method to get account stored in  salesforce org
    getAccountData()
    .then(res => {   // stor the account data and cll apex method
        let arr = []; // this array will the account detail in lable and value
        for (var i = 0; i <res.length; i++) {
            // add the account name as lable and value as id
            arr.push({ label: res[i].Name, value: res[i].Id })
        }
        this.arrvalue = arr; // store the arr object in to option array
    })
  
    }
// get selected  account record id
    handleChange(event) { 
        this.IsVisible = true; //  whenever account get selected then show the card and contact datatable will disply
    this.value = event.detail.value;
    // window.alert(JSON.stringify(this.value));


//call the getContact apex method
getContact({AccId : this.value})       //pass selected acc record id to the contact method
.then( result=> {
   this.data = result;
})
.catch( err=>{
    console.alert('Error occured'+err);
})

}
}