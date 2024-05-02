public class ComboBoxAccountData {
    
    @AuraEnabled
    public static list<Account> getAccountDetails(){
        list<Account> AccountList=[select Id ,Name from Account];
        return AccountList;
    }

}