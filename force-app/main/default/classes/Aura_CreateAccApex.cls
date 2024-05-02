public class Aura_CreateAccApex {
    @AuraEnabled
    public static String CreateAcc(Account acc){
        String Result;
        insert acc;
        Result='Account is created';
        return result;
        
       
            
    }

}