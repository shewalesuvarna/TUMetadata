public class ComponenrEvent_Practice {
    @AuraEnabled
    Public static String InserAcc(Account acc){
        String Result;
        insert acc;
        Result=acc.id;
        return result;
        
    }
    
    Public static List<Account> DispAcc(){
        return[select id, name, phone, Industry from Account];
        
    }


}