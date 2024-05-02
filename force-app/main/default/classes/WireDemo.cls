public class WireDemo {
    
@AuraEnabled(cacheable =true )
    
    public static list<Flight__c> getFlightList ()
    {
        List<Flight__c> FlightDetails =[select Name,Flight_Name__c	 from  Flight__c];
        system.debug('FlightDetails:'+FlightDetails );
        return FlightDetails;

    }
    
}