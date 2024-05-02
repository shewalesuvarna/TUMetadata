({
    searchRecords : function(component, searchTerm) {
        var action = component.get("c.searchRecordsApex");
        action.setParams({
            searchTerm: searchTerm
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.searchResults", response.getReturnValue());
                component.set("v.showDropdown", true);
            }
        });
        
        $A.enqueueAction(action);
    }
})