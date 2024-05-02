public with sharing class CallLWC {

    @AuraEnabled(cacheable=true)
    public static List<Account> ShowAcc() {
        List<Account> AccList = [SELECT Id, Name,Phone FROM Account];
        return AccList;
    }
}