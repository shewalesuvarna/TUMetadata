public class AccountUtility {
    public static void  viewAnnualRevenue(){
        list<Account>accountsList = [select Name , AnnualRevenue from Account ]   ;
        system.debug('accountsList ' +accountsList );
        if(accountsList.size()>0){
            for(Account objeAccount :accountsList ){
                system.debug('Account Name'+objeAccount.Name+ 'Annual Revenue '+ objeAccount.AnnualRevenue  );
            }
        }
        
        
    }

}