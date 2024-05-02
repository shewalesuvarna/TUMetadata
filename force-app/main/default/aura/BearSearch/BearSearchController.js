({
	doSearch : function( component, event, helper) {
		var componentEvent= component.getEvent("BearEvent");
	     var SearchParm= component.find('SearchInput').get('v.value');
        componentEvent.setparams({
            SearchText:SearchParm
        });
        componentEvent.fire();
       
    }
})