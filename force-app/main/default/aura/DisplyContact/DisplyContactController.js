({
	loadme : function(component, event, helper) {
        var colm =[
            {label:"First Name",fieldname:"FirstName"},
            {label:"Last Name",fieldname:"LastName"}
        ];
        component.set("v.con",colm);
        var action = component.get("c.allCon");
	}
})