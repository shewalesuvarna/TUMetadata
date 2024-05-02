import { LightningElement,track } from 'lwc';

export default class TrackDecorator extends LightningElement {

   @track fullname= {firstname:"",lastname:"" };

   Tobehandle(event)
   {
    const feillvalue=event.target.name;
   // window.alert(feild);
    if(feillvalue === 'firstname')
    {
        this.fullname.firstname=event.target.value;
    }
    else if(feillvalue === 'lastname')
    {
        this.fullname.lastname=event.target.value;   
    }
   }

}