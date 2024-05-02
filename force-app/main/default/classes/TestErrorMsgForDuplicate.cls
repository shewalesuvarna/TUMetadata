@isTest
public class TestErrorMsgForDuplicate {
static testmethod void TestContact(){
List<Contact> ConList = new list <Contact>();
contact con = new contact();
con.LastName='shewale';
con.Email = 'suvarna@gmail.com';
ConList.add(con);
insert con;

contact con1 = new contact();
con1.LastName='shewale';
con1.Email = 'suvarna@gmail.com';
ConList.add(con1);
insert con1;
}
}