({
    doInit: function(component, event, helper) {
        var accountId = component.get("v.recordId");
        helper.fetchContacts(component, accountId);
    },

    searchField: function(component, event, helper) {
        var accountId = component.get("v.recordId");
        helper.fetchContacts(component, accountId);
    },

    SetSelectedRecord: function(component, event, helper) {
        var selectedId = event.currentTarget.id;
        var selectedName = event.currentTarget.dataset.name;
        component.set("v.selectedRecordName", selectedName);
        // Handle further actions as needed
    }
})