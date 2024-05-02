({
	saveAccount : function(component, event, helper) {
        var data = component.get("v.account");
        
        var action = component.get("c.CreateAcc");
         action.setParams({
             "acc":data
        });
        
        
        $A.enqueueAction(action);
    }
})