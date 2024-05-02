import { LightningElement } from 'lwc';

export default class MyFirstCom extends LightningElement {

    MyTitle = 'Hello World';
  changeHandler(event) {
    this.greeting = event.target.value;
}
}