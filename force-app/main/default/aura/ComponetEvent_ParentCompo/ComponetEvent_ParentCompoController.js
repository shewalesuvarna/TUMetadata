({
	CreateCol : function(component, event, helper) {
        var c =[ 
            { label:'Account Name',fieldName:'Name'},
            { label:'Account phone',fieldName:'Phone'},
            { label:'Account Industry',fieldName:'Industry'}
            
        ];
        component.set("v.Pacc");
      },
    
    Disp : function(component, event, helper) {
        
        var action = component.get("c.DispAcc");
        action.setCallback(this,function(Response){
            var state = Response.getstate();
            if(state == 'SUCCESS'){
             var resp = state.getReturnValue();
              component.set('Pacc',resp);  
                

            }
        })
      }

    
})