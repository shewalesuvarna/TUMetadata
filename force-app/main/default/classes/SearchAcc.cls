public class SearchAcc {
    @auraenabled
    Public static List<account> SearchAccget(String Searchtext){
        String st = Searchtext;
        List<Account> Al =[select id, Name, Phone from Account where Name Like:st];
		return Al;
    }

}