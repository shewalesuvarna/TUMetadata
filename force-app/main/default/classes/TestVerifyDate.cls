@istest
private class TestVerifyDate {
    @istest static void  checkDate(){
        Date date1 =  date.today();
        Date date2=    date1.addDays(29);
        Date t = VerifyDate.CheckDates(date1, date2);
        system.assertEquals(t, date2);
    }
    
    @istest static void Dateover()
    {
		   Date date1 =  date.today();    
          Date date2=    date1.addDays(31);
        Date t = VerifyDate.CheckDates(date1, date2);
        system.assertEquals(t, date1);
    }
}