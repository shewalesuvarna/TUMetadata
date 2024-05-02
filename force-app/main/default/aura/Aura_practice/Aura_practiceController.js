({
    myAction : function(component, event, helper){ 
		//  get the value without attribute in js
		var a = component.find(num1).get("v.value");
    }
})
         //how to call init 
		({
    		whishme : function(component, event, helper) {
        		windows.alert ('call init');
    		}
		})
      
		({
            //how to use attribute in aura componant
        subme : function(component, event, helper) {
            component.set("v.empname", "Suvarna Shewale");
            component.set("v.empsal", "60000");
            component.set("v.empage", "27");
        }
        })

		({
        Clearme:function(component, event, helper) {
            component.set("v.empname", "null");
            component.set("v.empsal", "null");
            component.set("v.empage", "null");
        }
        })

		({
            Calculate:function(component, event, helper) {
                var a= component.get("v.num1");
                var b= component.get("v.num2");
                var c= component.get("v.num3");
                var n1 = parseInt(a);
                var n2 = parseInt(b);
                var n3 = parseInt(c);
               if( n1 > n2){
                    component.set("v.Result", n1);
                }
                
               else{
                component.set("v.Result", n2);
             }
            }
            
			})    

			({
				clear:function(component, event, helper) {
 				 component.set("v.Result", null);	
			}
			})

			// how to use aura id
		({
            
            calme:function(component, event, helper) {
            var a = component.get("Aval").get("v.value");
           	var b = component.get("Bval").get("v.value");
            var evt = event.getSource();
            var bid = evt.getLocalId();
                if(bid == "Add"){
                var c =  a+b;
                component.find("result").set("v.value",c);
                }
               else if(bid == "Sub"){
                var c =  a-b;
                component.find("result").set("v.value",c);
                }   
               else if(bid == "Mult"){
                var c =  a*b;
                component.find("result").set("v.value",c);
                }  
                else
                {
                     component.find("result").set("v.value",'0');
                }
              }
       })