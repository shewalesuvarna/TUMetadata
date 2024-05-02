public class CountryCodeHelper {
 public static String getCountryCode(String country) {
    Country_Code__mdt countryCode =Country_Code__mdt.getinstance(country);
    
  
    return countryCode.Country_Code__c;
  }
}