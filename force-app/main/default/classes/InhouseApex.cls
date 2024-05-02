public with sharing class InhouseApex {
        static String[] to_19 = new string[]{ 'zero', 'One',  'Two', 'Three', 'Four',  'Five',  'Six', 'Seven',
                                              'Eight', 'Nine', 'Ten',  'Eleven', 'Twelve', 'Thirteen',  
                                              'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen' };
        static String[] tens = new string[]{ 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'};
        static string[] denom = new string[]{ '',
                                             'Thousand',   'Million',     'Billion',    'trillion',    'quadrillion',  
                                             'quintillion', 's!xtillion',   'septillion',  'octillion',   'nonillion',  
                                             'decillion',  'undecillion',   'duodecillion', 'tredecillion',  'quattuordecillion',  
                                             's!xdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion' };
    // convert a value < 100 to English.  
   public static string convert_nn(integer val) {
             if (val < 20)
        return to_19[val];
      if (val == 100)
          return 'One Hundred';
      for (integer v = 0; v < tens.size(); v++) {
        String dcap = tens[v];
        integer dval = 20 + 10 * v;
        if (dval + 10 > val) {
          if (Math.Mod(val,10) != 0)
            return dcap + ' ' + to_19[Math.Mod(val,10)];
          return dcap;
        }    
      }
      return 'Should never get here, less than 100 failure';
    }
    public static String convert_nnn(integer val) {
        system.debug('val'+val);
      string word = '';
      integer rem = val / 100;
      integer mod = Math.mod(val,100);
      if (rem > 0) {
        word = to_19[rem] + ' Hundred and';
        if (mod > 0) {
          word += ' ';
        }
      }
      if (mod > 0) {
        word += convert_nn(mod);
      }
      return word;
    }
    @AuraEnabled
    public static String english_number(long val) {
        system.debug('amountvalue'+val);
      if (val!= null && val < 100) {
        return convert_nn(val.intValue());
      }
     if (val!= null && val < 1000) {
        return convert_nnn(val.intValue());
      }
      for (integer v = 0; v < denom.size(); v++) {
        integer didx = v - 1;
        integer dval = (integer)Math.pow(1000, v);
        if (dval > val) {
          integer mod = (integer)Math.pow(1000, didx);
          integer l = (integer) val / mod;
          integer r = (integer) val - (l * mod);
          String ret = convert_nnn(l) + ' ' + denom[didx];
          if (r > 0) {
            ret += ', ' + english_number(r);
          }
          return ret;
        }
      }
      return 'Should never get here, bottomed out in english_number';
    }
    
  // create credit memo
    @AuraEnabled 
     public static Id createCreditDemo(String Currency1,String Amtword,Integer Amount,String Invoice,String goodshippedback,String goodreturn,String Description,String vendorInvoice,String resoancredit,String CreditDetailvalue ,String nm, Decimal customerNumber, String streetAddress, String city, String state, Decimal zipCode, String country, Id accountId, Id selectedContactId) {
    System.debug('go to apex'); 
    
    	Credit_Memo__c cm = new Credit_Memo__c(
        Name = nm,
        Customer_Number__c = customerNumber,
        Street_Address__c = streetAddress,
        City__c = city,
        State__c = state,
        Zip__c = zipCode,
        Country__c = country,
        Billing_Account__c = accountId,
        Bill_To_Contact__c = selectedContactId,
        Credit_Details__c= CreditDetailvalue,
        What_was_the_reason_for_credit__c = resoancredit,
        Vendor_Invoice__c	=vendorInvoice,
        Description__c = Description,
       Have_the_goods_been_returned_by_the_cust__c = goodreturn,
     Will_the_goods_be_shipped_back_to_AU__c = goodshippedback,
     Has_new_Invoice_been_sent_to_the_custom__c = Invoice,
     Amount__c = Amount,
     Amount_in_Word__c=Amtword,
    Currency__c = Currency1
    );
   		insert cm;
   		system.debug('credit memo id'+cm.id);   
  		return cm.Id;
}
     // contact lookup
     @AuraEnabled
	public static List<Contact> getContactsByAccountId(Id accountId) {
    List<Contact> conlist = [SELECT Id, OtherAddress,Name FROM Contact WHERE AccountId = :accountId];
    system.debug('Contact List: ' + conlist);
    return conlist;
}
    @AuraEnabled
	public static Account getAccountByAccountId(Id accountId) {
    return [SELECT Id, Name, ShippingAddress FROM Account WHERE Id = :accountId LIMIT 1];
}

    // Account lookup
    @AuraEnabled
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
}