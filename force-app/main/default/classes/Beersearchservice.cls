public class Beersearchservice {
@AuraEnabled
    
     public static list<Sobject> searchbeer(string searchparam)
     {
         String likeparam='%'  +searchparam+'%';
         String Query='Select  Id , Name From Beer_Explorer__c where Name Like:likeparam LIMIT 10' ;
         List<Sobject> sobjectList = Database.query(Query);
         return sobjectList;
     }
}