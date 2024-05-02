import { LightningElement,track } from 'lwc';

export default class HideShowCard extends LightningElement {
@track OnclickDemo ='show';  
@track cardvisible =false;

handleclick(event) {// event pass due to pass the value of label
const label=event.target.label;
if(label=== 'show')
{
    this.OnclickDemo='Hide';
    this.cardvisible =true;
}
else if(label==='Hide')
{
    this.OnclickDemo='show';
    this.cardvisible =false;
}
} 
}