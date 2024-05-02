({
	myAction : function(component, event, helper) {

    var ConName = component.find("ConName").get("v.value");
   // var conNum = component.find("ConNum").get("v.value");
   // var street = component.find("street").get("v.value");
    //var city = component.find("city").get("v.value");
    //var state = component.find("State").get("v.value");
    //var postal = component.find("postal").get("v.value");
   // var country = component.find("Country").get("v.value");
    
    //console.log('conName: ' + conName);
   // console.log('conNum: ' + conNum);
    //console.log('street: ' + street);
    //console.log('city: ' + city);
   // console.log('state: ' + state);
   // console.log('postal: ' + postal);
   // console.log('country: ' + country);

    var action = component.get("c.createCreditDemo");
    action.setParams({
        "ConName": ConName  
    });
    action.setCallback(this, function(crditDemo) {
        var state = crditDemo.getState();
        if (state === "SUCCESS") {
            var CDID = crditDemo.getReturnValue();
            alert("Credit Demo Created Successfully: " + CDID);
        } else {
            alert("Error Occurred");
        }
    });
    $A.enqueueAction(action);
}
 })