({
    handleKeyUp: function(component, event, helper) {
        var searchText = component.find('enter-search').get('v.value');
        var searchEvent = component.getEvent('CustomLookupEvent');
        searchEvent.setParams({
            SearchText: searchText
        });
        
        searchEvent.fire();
    }
})