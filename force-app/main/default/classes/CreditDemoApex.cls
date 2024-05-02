public class CreditDemoApex {
    @AuraEnabled

    public static List<SObJectResult> getResults(String ObjectName, String fieldName, String value) {

        List<SObJectResult> SObJectResultList = new List<SObJectResult>();

        String q = 'SELECT Id,Name From '+ObjectName+' where '+fieldName+' Like \'%'+value+'%\'';

        system.debug('q///'+q);

        for(SObject so: Database.query(q)){

            String fieldValue = (String) so.get(fieldName);

            SObJectResultList.add(new SObJectResult(fieldValue,so.Id));

        }
		return SObJectResultList;

    }
	  public class SObJectResult{

        @AuraEnabled

        public String recName;

        @AuraEnabled

        public Id recId;
   public SObJectResult(String recNameTemp, Id recIdTemp) {

            recName = recNameTemp;

            recId = recIdTemp;

        }

    }

}