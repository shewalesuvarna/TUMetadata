public with sharing class getContact {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccounts() {
        return [SELECT Id, Name FROM Contact];
    }
}