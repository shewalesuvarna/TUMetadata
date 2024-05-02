public class AssignPlayer {
    // return the player list
    @AuraEnabled
    public static List<Players__c> assignPlayerList(string selcecteidfromlwc)
    {
        list<Players__c> PlayerList = [select Id, Name,Goals__c, Football_club__c from Players__c where Football_club__c =:selcecteidfromlwc];
        if(PlayerList.isEmpty() )
        {
            return PlayerList;
        }
        return PlayerList;

    }
        @AuraEnabled
    public static Boolean assignClubCaptain(Id lwcRowId){
        List<Football_club__c>  clublist =new list<Football_club__c>();
        list<Players__c> playerlistforassinment =[select Id,Name ,Football_club__c from  Players__c where id=:lwcRowId ];
        if(playerlistforassinment.isEmpty())
        {
            for(Players__c plobj: playerlistforassinment){
                Football_club__c  clubobg= new Football_club__c();
                clubobg.Id=plobj.Football_club__c;
                clubobg.Captain__c=plobj.Id;
                clublist.add(clubobg);
                
                
            }}
            if(clublist.isEmpty())
            {
                upsert clublist;
                return true;
            }
            return false;
        }
    }