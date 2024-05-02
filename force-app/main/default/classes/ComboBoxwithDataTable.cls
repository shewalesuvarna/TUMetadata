public class ComboBoxwithDataTable {
    @AuraEnabled
    //this method return all account in lwc
Public static List<Account> getAccountData()
{
     List<Account> AccountDetail =  [select Id ,Name from Account];
    return  AccountDetail;
    
}
            @AuraEnabled

    public static List<Contact> getContact(String AccId)
    {
        List<Contact> ContactDetails =[select Id, Name from Contact where AccountId=:AccId];
        return ContactDetails;
    }
    
}