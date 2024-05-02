import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    ClickonHandle(){

        this.template.querySelector(h1);
}
}