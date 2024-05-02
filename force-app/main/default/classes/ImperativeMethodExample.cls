public class ImperativeMethodExample {
@AuraEnabled()
    
    public static list<Flight__c> getFlightData()
    {
        List<Flight__c> FlightDetails =[select Name,Flight_Name__c	 from  Flight__c];
        system.debug('FlightDetails:'+FlightDetails );
        return FlightDetails;

    }
    

}