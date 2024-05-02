({
	handleCompEvent : function(component, event, helper) {
		var searchparm = event.getparam('SearchText');
        var action =component.get('c.searchbeer' );
        action.setparams({
            searchparam:searchparm
              
        });
        action.setcallback(this,function(response){
              var state=response.getState();
        if(state == 'SUCCESS'){
            
            var responsevalue=response.getReturnValue();
            Console.log('responsevalue', responsevalue);
        }else{
            Console.log(response.getError);
            
        }
    });
        
        $A.enqueueAction(action);
        
	}
})