public class searchRecordsController {

   public list<Account> acc{get;set;}
    public searchRecordsController (){
        string searchText = ApexPages.CurrentPage().GetParameters().Get('sText');
        
        if(searchText !=null && searchText !=' '){
        
            acc= new List<Account>();
        
            acc=[Select id,name from Account where name like :searchText+'%'];
        }
}

public pagereference GotoSerchresultpage()
{
pagereference pgref = new pagereference ('/apex/searchAccountData');

return pgref.setredirect(true);
}

}