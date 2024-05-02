({
/*
    doInit: function(cmp,evt,callback) {

        cmp.set("v.displayList",true);

            

    },

	searchField: function(component, event, helper){

        var currentText = event.getSource().get("v.value");

        if(currentText != ''){

            component.set("v.displayList",true);

        }

        console.log('search field///'+currentText);

        var action = component.get("c.getResults");

        action.setParams({

        "ObjectName": 'Account',

        "fieldName": 'Name',

        "value": currentText   

       });

        action.setCallback(this, function(response) {

            var state = response.getState();

            console.log('state--'+state); 

            if(state === "SUCCESS") {

                console.log('///',response.getReturnValue());

                component.set("v.searchRecords", response.getReturnValue());

            }

        });

        $A.enqueueAction(action);

    },

    setSelectedRecord: function(component, event, helper){

        var currentText = event.currentTarget.id;

        console.log('currentText///'+currentText);

        var nameval = event.currentTarget.dataset.name;

        console.log('nameval///'+nameval);

        component.set("v.selectRecordName",nameval);

        component.set("v.selectRecordId",currentText);

        component.set("v.displayList",false);

    }
*/
})