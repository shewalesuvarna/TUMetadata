public class GetAllContact {
@Auraenabled
    
    Public static List<Contact> GetAllContact(){
        
        List<Contact> con = [select id, name,phone from Contact];
        return con;
    }
}