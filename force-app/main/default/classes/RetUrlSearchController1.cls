public class RetUrlSearchController1 {
 public String nameQuery ;
 public List<Account> accounts;
    
    public string getnameQuery()
    {
        return nameQuery;
    }
      public list<Account> getaccounts()
    {
        return accounts;
    }
    public void setnameQuery(String input)
    {
        nameQuery=input;
    }
 public PageReference executeSearch()
 {

  accounts=(List<Account>)[FIND:nameQuery IN ALL FIELDS RETURNING ACCOUNT (ID,Name)][0];
  return null;
  
 }
 }