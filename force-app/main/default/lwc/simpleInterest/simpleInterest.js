import { LightningElement,track } from 'lwc';

export default class SimpleInterest extends LightningElement {
@track currentOutput;
principal;
year;
rate;
principalvalue(event)
{
this.principal = parseInt(event.target.value);

}
yearvalue(event)
{
  this.year =parseInt(event.target.value);
}
ratevalue(event){
this.rate = parseInt(event.target.value);
}
Calculate(){
 this.currentOutput ='simple interest is:' +(this.principal+this.rate+this.year)/100;
}

}