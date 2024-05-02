({
/*    getContact: function(component, event, helper) {
       // let recordId  = '0035j000010uewCAAQ';
        let ConName = component.find("ConName").get("v.value");
       	let action = component.get("c.getContact");
        
        action.setParams({
          //  "recordId ":recordId ,
            "ConName": ConName
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let CDID = response.getReturnValue();
                 var result = response.getReturnValue();
                alert("Credit Demo Created Successfully: " + CDID);
            } else {
                alert("Error Occurred");
            }
        });
        $A.enqueueAction(action);
    }*/
})