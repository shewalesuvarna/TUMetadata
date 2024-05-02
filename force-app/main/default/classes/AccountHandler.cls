public class AccountHandler {
public static void insertAccount (integer value)
{
    list<Account> addAccounts = new list<Account>();
    Integer N =1;
    While(N<=value){
        Account acc =new Account();
        acc.Name =' Acme Inc' + N;
        acc.AccountNumber = ' A000n'  + N;
        addAccounts.add(acc);
        system.debug(addAccounts);
        N=N+1;
    }
    insert addAccounts;
}
}