({
    fetchContacts: function(component, accountId) {
        var action = component.get("c.getContactsByAccountId");
        action.setParams({ "accountId": accountId });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.SearchRecord", response.getReturnValue());
            }
        });

        $A.enqueueAction(action);
    }
})