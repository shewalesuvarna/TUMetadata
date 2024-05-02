import { LightningElement, track } from 'lwc';

export default class Employeeinfo extends LightningElement {
    @track name;
    @track Age;
    @track salary;
    @track show=true;

    namehandler(event){

        this.name=event.target.value;

    }
    ageHandler(event){  

        this.Age=event.target.value;

    }
    salaryHandler(event){

        this.salary=event.target.value;

    }
    SaveButtonHandler(){

        this.show=false;
    }
    
}