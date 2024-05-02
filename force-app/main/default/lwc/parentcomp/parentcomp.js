import { LightningElement } from 'lwc';

export default class Parentcomp extends LightningElement {
    percentage = 10; // Initial value for percentage

    percentageHandler(event) {
        this.percentage = event.target.value;
    }

    ResetSliderHandler(){
        this.template.querySelector('c-slider-childcomp').ResetSlider();
    }
}