import { LightningElement, track } from 'lwc';

export default class ConditionalRendering_Directive extends LightningElement {
    @track isVisible = false;

    handleClick() {
        this.isVisible = true;
    }
}