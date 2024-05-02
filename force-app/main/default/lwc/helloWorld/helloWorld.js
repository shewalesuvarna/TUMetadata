import { LightningElement, track } from 'lwc';


export default class HelloWorld extends LightningElement {
// simple hello and copy paste value
    title="Hello";
fullname="Zero to Hero";

    ChangeHandler(event){
this.title=event.target.value;
    }
// how to use track function
   @track address={
    city:'pune',
    postcode:4339,
    Country: 'India' 
}

TrackHandler(event){
    this.address.city=event.target.value;
}
// how to use getter
//users: {"abc","pqr","LMN" }
num1 = 12
num2 =30
get firstuser(){
  //  return this.users[0];
}

get multiply(){
    return this.num1*this.num2
}
}