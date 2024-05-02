({
	doSelect : function(component, event, helper) {
		var index= event.CurrentTarget.id;
        var selectedRecord = component.get('v.recordList')[index];
        console.log('selectedRecord',selectedRecord);
        alert(index);
        
        var SelectedRecord = component.getEvent('v.recordList')[index];
        selectEvent.setParams({
            record:SelectedRecord
        });
        
        selectEvent.fire();
	}
})