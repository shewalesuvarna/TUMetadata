public class ContactDatabase {
@AuraEnabled(cacheable =true )
    public static list<Contact> getContactList (Id lwcrecord, String SearchKeys)
    {
        //if search key is available
        if(SearchKeys != null && SearchKeys !=' '){
            String Key ='%' + SearchKeys +'%';
            List<Contact> ContactSearchList =[select Id, Name,	Phone from  Contact where AccountId =: lwcrecord AND Name like: key ];
             return  ContactSearchList;    
        }
        //if search key is nort available
        else{
           
        
        List<Contact> ContactDetails =[select Id, Name,	Phone from  Contact where AccountId =: lwcrecord]; // fetch only account related contact
        //null check
            if(ContactDetails.isEmpty()){
                 return ContactDetails;
            } 
            return ContactDetails;
            

    }
    }}