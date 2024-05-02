public class AccountTriggerhandler {
    public static void beforeinserdata(list <Account> acclist){
        for(Account acc : acclist){
        //   acc.description= 'test account data';
        }
    }
    
    public static void Afterinserdata(List<Account> acclist){
        list<opportunity> opplist = new  list<opportunity>();
        for(Account acc: acclist)
        {
            Opportunity  opp = new Opportunity();
            opp.Name = acc.Name;
            opp.AccountId = acc.Id;
            opp.StageName='Closed Won' ;
            opp.CloseDate = system.today();
            opplist.add(opp);
        }
       
            insert opplist;
    }
        
        
   public static void beforeupdate(List<Account> acclist, map<id,Account> accmap ){
       
      
       for(Account acc : acclist)
       {
           if(accmap != null && acc.Phone !=accmap.get(acc.Id).Phone  ){
               
               acc.Description ='phone was updated ';
           }
           
       }
   
    
   }    
}