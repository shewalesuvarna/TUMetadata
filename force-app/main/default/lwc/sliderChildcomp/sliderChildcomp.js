import { LightningElement, api } from 'lwc';

export default class SliderChildcomp extends LightningElement {
    val=20;
    getvalue(event){
        this.val=event.target.value;

    }
    @api ResetSlider(){

        this.val =50;
    }

}