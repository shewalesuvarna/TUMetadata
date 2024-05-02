({
		doInit1: function(component, event, helper) {
        // Fetch complete account details
        var accountId = component.get("v.recordId");
        var action = component.get("c.getAccountByAccountId");

        action.setParams({
            "accountId": accountId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var accountDetails = response.getReturnValue();
                component.set("v.accountName", accountDetails.Name);
                
                // Separate the address components
                var address = accountDetails.ShippingAddress;
                if (address) {
                    component.set("v.streetAddress", address.street);
                    component.set("v.city", address.city);
                    component.set("v.state", address.state);
                    component.set("v.zipCode", address.postalCode);
                    component.set("v.country", address.country);
                }
            } else {
                console.error('Error fetching account details:', response.getError());
            }
        });

        $A.enqueueAction(action);
    },
// Create credit memo record
    handleSubmit: function(component, event, helper) {
        var CMName = component.get("v.customerName");
        var customerNumber = component.get("v.customerNumber");
        var streetAddress = component.get("v.streetAddress");
        var city = component.get("v.city");
        var state = component.get("v.state");
        var zipCode = component.get("v.zipCode");
        var country = component.get("v.country");
        var accountId = component.get("v.recordId");
        var selectedContactId = component.get("v.contactId");
    	var selectedCreditDetail = component.get("v.selectedCreditDetail");
        var resoancreditvalue =component.get("v.selectedCreditResoan");
        var vendorInvoices =component.get("v.vendorInvoice");
        var Descriptions =component.get("v.Description");
       var goodreturns =component.get("v.goodreturn");
		var goodshippedbacks =component.get("v.goodshippedback");
        var Invoices = component.get("v.Invoice");
        var Amounts = component.get("v.amount");
        var Amtwords =component.get("v.amountInWords");
        var Currencys =component.get("v.selectedCurrency");
        var action = component.get("c.createCreditDemo");
            console.log('Account Id: ', accountId);
			console.log('State: ', state);
    		console.log('Country: ', country);
			console.log('selectedCreditDetail: ', selectedCreditDetail);
			action.setParams({
            "nm": CMName,
            "customerNumber": customerNumber,
            "streetAddress": streetAddress,
            "city": city,
            "state": state,
            "zipCode": zipCode,
            "country": country,
            "accountId": accountId,
            "selectedContactId": selectedContactId,
       		"CreditDetailvalue": selectedCreditDetail,
             "resoancredit": resoancreditvalue,
              "vendorInvoice":vendorInvoices,
                "Description":Descriptions,
                "goodreturn":goodreturns,
                "goodshippedback":goodshippedbacks,
                "Invoice":Invoices,
                "Amount":Amounts,
                "Amtword":Amtwords,
                "Currency1":Currencys
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                console.log('Result:', result);
                 var navEvt = $A.get("e.force:navigateToSObject");
                 navEvt.setParams({
                    "recordId": result,
                    "slideDevName": "detail"
                });
                navEvt.fire();
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "Record created successfully",
                    "type": "success"
                });
                toastEvent.fire();
                
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error('Errors:', errors);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Failed to create record: " + errors[0].message,
                    "type": "error"
                });
                toastEvent.fire();
            }
      });
        
        $A.enqueueAction(action); 
       	component.set("v.customerName", ""); 
    	component.set("v.customerNumber", "");
        component.set("v.streetAddress", ""); 
    	component.set("v.city", "");
        component.set("v.state", "");
        component.set("v.zipCode", "");
        component.set("v.country", "");
        component.set("v.Contactname", "");
        component.set("v.accountName", "");
		component.set("v.Amtwords", "");
       },
   
    // Account lookup
   
    doInit: function(component, event, helper) {
        component.set("v.displayList",true);
    },
      searchField : function(component, event, helper) {
        var currentText = component.get("v.accountName");
       if(currentText !=''){
         component.set("v.displayList", true);
    }
        console.log('Search field: ' + currentText);
        var action = component.get("c.getResults");
        action.setParams({
            "objectName": 'Account',
            "fieldName": 'Name',
            "value": currentText
        });
           action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(state);
            
            if(state === "SUCCESS") {
                console.log('////', response.getReturnValue());
                component.set("v.SearchRecord", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
    },
    SetSelectedRecord: function(component, event, helper) {
        var currentText= event.currentTarget.id;
        console.log('currentid'+currentText);
        var nameval = event.currentTarget.dataset.name;
       console.log('currentname'+nameval);
        component.set("v.SelectRecordId",currentText);
         component.set("v.accountName",nameval);
        component.set("v.displayList", false)
    },
    //contact
    doInitcon:function(component, accountId) {
        component.set("v.displayListcon",true);
        
    },
   fetchContacts: function(component, accountId) {
       var accountId = component.get("v.recordId");
            //  var accountId = component.get("v.SelectRecordId");

          var currentText = component.get("v.Contactname");
        var action = component.get("c.getContactsByAccountId");
       if(currentText !=''){
         component.set("v.displayListcon", true);
    }
         action.setParams({
        "accountId": accountId });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                 console.log('////con', response.getReturnValue());
                component.set("v.SearchCon", response.getReturnValue());
           }
        });

        $A.enqueueAction(action);
    },
     SetSelectedRecordcon: function(component, event, helper) {
        var currentText= event.currentTarget.id;
        console.log('currentid'+currentText);
        var nameval = event.currentTarget.dataset.name;
         var address = event.currentTarget.dataset.OtherAddress;
       console.log('currentname'+nameval);
       console.log('address'+address);
         
        component.set("v.Contactname",nameval);
         component.set("v.contactId",currentText);
        component.set("v.displayListcon", false)
     },

   		handleAmountChange: function (component, event, helper) {
        var amt = component.get("v.amount");
		console.log('Amount: ' +amt);
		var action = component.get("c.english_number");
        action.setParams({ "val": amt});

        action.setCallback(this, function (response) {
            var state = response.getState();
           console.log('Callback state: ' + state);
			if (state === "SUCCESS") {
            console.log('amountInWords: ', response.getReturnValue());
            component.set("v.amountInWords", response.getReturnValue());
           
             console.log('Amo unt in words: ' + component.get("v.amountInWords"));
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error("Error: " + errors[0].message);
            }
        });
			
        $A.enqueueAction(action);
    }  
})