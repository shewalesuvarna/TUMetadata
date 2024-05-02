public class AccountContactsController {
    @AuraEnabled
    public static List<Contact> getContactsByAccountId(String accountId) {
        return [SELECT Id, Name FROM Contact WHERE AccountId = :accountId];
    }
}