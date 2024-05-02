public class loopapex {
/* @AuraEnabled
    public static List<SobJectResult> getResults(String objectName, String fieldName, String value) {
        List<SobJectResult> sObjectResultList = new List<SobJectResult>();
       String q = 'SELECT Id, Name FROM ' + objectName + ' WHERE ' + fieldName + ' LIKE \'%' + value + '%\'';
		System.debug('q///' + q);

        system.debug('q///'+q);
        for(Sobject so:Database.query(q)){
            String fieldvalue =(String)so.get(fieldName);
            sObjectResultList.add(new SobJectResult(fieldvalue,so.id));
            
          }
          return sObjectResultList;
    }
    public class SobJectResult{
        @AuraEnabled
        Public String recName;
       @AuraEnabled
        Public Id recId;
        
        Public SobJectResult(String recNameTemp, Id recIdTemp){
            recName = recNameTemp;
            recId = recIdTemp;
            System.debug('name: ' + recName);
        }
  }
 
     @AuraEnabled
public static List<ContactWrapper> getContactsByAccountId(Id accountId) {
   List<Contact> conlist = [SELECT Id, Name FROM Contact WHERE AccountId = :'accountId'];
    List<ContactWrapper> contactWrappers = new List<ContactWrapper>();
    
    for (Contact con : conlist) {
       contactWrappers.add(new ContactWrapper(con.Id, con.Name));
        
    }
     
    system.debug('Contact Wrappers: ' + contactWrappers);
    return contactWrappers;
}
   public class ContactWrapper {
    @AuraEnabled
    public Id contactId ;
    
    @AuraEnabled
    public String contactName ;
    
    public ContactWrapper(Id id, String name) {
        contactId = id;
        contactName = name;
        System.debug('name: ' + contactName);
    }
       
}*/
    @AuraEnabled
public static List<Contact> getContactsByAccountId(Id accountId) {
    List<Contact> conlist = [SELECT Id, Name FROM Contact WHERE AccountId = :accountId];
    system.debug('Contact List: ' + conlist);
    return conlist;
}
 
}