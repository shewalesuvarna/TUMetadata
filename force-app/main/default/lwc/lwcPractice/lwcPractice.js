import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LwcPractice extends LightningElement {

    myfrist ="Salesforce LWC";
 // variable
//     connectedCallback() 
//    {
//      const name="Salesforce Developer-LWCcc";
//       name="salesforce";
//      window.alert(name);

//     }
// function
    // Handlefunction()
    // {
    //        window.alert("Hello Salesforce");
    // }
//Toast Event
//  Handlefunction()  
//     {
//           this.ShowToast(this.myfrist);
//      }

//     ShowToast(firstFunctionArgument)
//     {
//         const event = new ShowToastEvent({
//             title: firstFunctionArgument,
//             message:
//                 'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
//                 variant:'success'
//         });
//         this.dispatchEvent(event);
//     }
        // how to return the function and arrow funcrion 


        
myFirstFunction =(a,b) => {
    return(a/b);
    
    }
    
        connectedCallback() // It can be use for calling the function in componenent
{
 let callmyfunction =  this.myFirstFunction(10,2);
 window.alert("Divission is : "+callmyfunction);


}


}