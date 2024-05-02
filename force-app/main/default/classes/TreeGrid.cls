public class TreeGrid {
@AuraEnabled
    public static List<Account> getContactDetails(){
        List<Account> accList =[select Id,Name ,(select Name, Firstname,Lastname from Contacts) from Account LIMIT 3];
        if(accList.isEmpty())
        {
            return accList;
        }
        return null;
    }

}