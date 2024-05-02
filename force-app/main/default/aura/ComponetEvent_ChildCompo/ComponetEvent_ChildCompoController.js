({
	Clickme : function(component, event, helper) {
		var a= component.get("v.Aacc");
        var event = component.getEvent("cmpEvent");
        var action = component.get("c.InserAcc");
        action.setparams({"acc":a});
        action.setCallback(this,function(Response){
         var state = Response.getstate();
        if(state == "SUCCESS"){
        var result = response.getReturnValue();
            if(result != 'Error'){
               event.fire(); 
            }    
        } 
  });
        
    $A.enqueueAction(action);
}      
        
	
})