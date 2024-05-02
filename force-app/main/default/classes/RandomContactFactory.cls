public class RandomContactFactory {
    
    public static list<contact>generateRandomContacts(integer numofcontact, string Lastnamegen){
        
      List<Contact> con = new List<Contact>();
        for(Integer i= 0;i < numofcontact ; i++){
            
            Lastnamegen =  'Test'  + i;
            Contact a= new Contact(FirstName =Lastnamegen,  LastName=Lastnamegen ) ;
            con.add(a);
     
        }
        return con;
    }
}