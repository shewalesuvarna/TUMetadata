import { LightningElement, track } from 'lwc';
import getAccountDetails from '@salesforce/apex/ComboBoxAccountData.getAccountDetails';
export default class ComboBox extends LightningElement {
    @track value = '';
    @track arrvalue = [];


    get options() {
        return this.arrvalue;
    }

    connectedCallback() {

        getAccountDetails()
        
             .then(res => {
            let arr = [];
            for (var i = 0; i <res.length; i++) {
                arr.push({ label: res[i].Name, value: res[i].Id })
            }
            this.arrvalue = arr;
        })

        }
    

 handleChange(event) {
        this.value = event.detail.value;
    }
}