@isTest
public class TestRestrictContactByName {
    @isTest static void Test_interupdate(){
        Contact cnt = new Contact();
        cnt.LastName ='INVALIDNAME';
        Test.startTest();
        Database.SaveResult result = Database.insert(cnt, false);
        test.stopTest();
        system.assert(!result.isSuccess());
        system.assert(result.getErrors().size() > 0);
        system.assertEquals('The LAst name "INVALIDNAME"  is not allowed for DML', result.getErrors()[0].getMessage());
    }
}