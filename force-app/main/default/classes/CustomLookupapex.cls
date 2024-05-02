public class CustomLookupapex {
    
    @AuraEnabled
    public static List<SObject> getContactsByAccountId(String ObjectName, String sreachText, String fieldInsearch) {
        System.debug('ObjectName: ' + ObjectName);
        System.debug('sreachText: ' + sreachText);
        System.debug('fieldInsearch: ' + fieldInsearch);
        
        String SearchKey = '%' + sreachText + '%';
        String Query = 'SELECT Id, ' + fieldInsearch + ' FROM ' + ObjectName + ' WHERE ' + fieldInsearch + ' LIKE :SearchKey';
        
        List<SObject> conlist = Database.Query(Query);
        
        System.debug('conlist: ' + conlist);
        
        return conlist;
    }
}