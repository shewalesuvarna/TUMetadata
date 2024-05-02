import { LightningElement,api,track } from 'lwc';
// import assignPlayerList from '@salesforce/apex/AssignPlayer.assignPlayerList';
//  import assignClubCaptain from '@salesforce/apex/AssignPlayer.assignClubCaptain';
// // import {ShowToastEvent} from 'lightning/platformShowToastEvent';
//  //import { NavigationMixin} from 'lightning/navigation'; 
// //  const action= [
// //       {label : 'Assign', name:'assign'},
// //        {label:'View', name:'view' }

// //  ];
// const columns =[
//     {label:'Player Name', fieldName:'Name'},
//     {label:'Gols', fieldName:'Goals__c'},
// //    {
// //         type :'action',
// //     typeAttributes :{rowActions:actions},
// //   },
// ]; 
export default class DataTableWithRowAction extends LightningElement {

//       @track showPalyers='show players';
//      @track cardvisible=false;
//     @api recordId;
//     @track columns= columns;
//     @track data=[];
//     @track playerData =[];
// error
//     connectedCallback()
//       {
      //  console.log(this.recordId);

    //     assignPlayerList({selcecteidfromlwc :this.recordId})
    //     .then(result =>{
    //         this.data =result;
    //     }) 
    //     .catch(error =>{
    //         console.log("error occured"+error);
    //     })
    //  }
//     assignPlayerList ({ data, error }) 
//         if (data) {
//             this.data = data;
//         }
//         else if (error) {
//             console.log('error occured');
//         }

//     }

// //show hide functionality
// handleclick(event) {// event pass due to pass the value of label
//     const label=event.target.label;
//     if(label=== 'show players')
//     {
//         this.showPalyers='Hide players';
//         this.cardvisible =true;
//     }
//     else if(label==='Hide players')
//     {
//         this.showPalyers='show players';
//         this.cardvisible =false;
//     }
   // } 

    // handlerowaction(event)
    // {
    //     const actionName = event.detail.action.name;
    //     const row=event.detail.row;
    //     switch(actionName){
    //         case 'assign':
    //             this.assignCaptain (row);
    //             break;
    //         case 'view':
    //             this.navigateplayerRecordPage(row);
    //             break;
    //             default: 

    //     }
    // }
    // assignCaptain(currentRow){
    //     const selectedrow =currentRow;
    //     //sending selected row id to apex method assignClubCaptain 
    //     assignClubCaptain({lwcRowId :selectedrow.Id })
    //     .then(result => {
    //         this.playerData = result;
    //     })
    //     .catch(err =>{
    //         this.error =err;
    //     })
    //     this.showToast();
    //     window.location.reload; 
    // }

    //     showToast() {

    //         const event =new ShowToastEvent({
    //             label : 'Record updated',
    //             message :'Captain assign successfully',
    //             variant :'success',
    //             mode : 'dismissable'
    //         });
    //         this.dispatchEvent(event);
    //     }
    //         navigateplayerRecordPage(rowData){
    //             const palyar =rowData;
    //             this[NavigationMixin.Navigate]({
    //                 type :'standard_recordPage',
    //                 attributes:{
    //                 recordId :palyar.Id,
    //                 actionName :'view'

    //                 }
    //             })

    //         }
        }