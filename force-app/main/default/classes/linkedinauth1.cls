public class linkedinauth1 {
    public String x{get;set;}
    public static final string REDIRECT_URL='https://dynamkisch-dev-ed--c.visualforce.com/apex/testvfforlinkdin';
    public static final string LINKEDIN_API_KEY='77sn7nmyjvzd03';
public static final string OAUTH_CODE_END_POINT_URL='https://www.linkedin.com/oauth/v2/authorization?response_type=code';
  //  public static final string SCOPE='r_basicprofile r_fullprofile r_emailaddress r_network r_contactinfo rw_nus rw_groups w_messages';
  public static final string SCOPE ='r_emailaddress r_liteprofile w_member_social';
    public static final string STATE='suvarna'; 
   
   public PageReference connect(){
     x=OAUTH_CODE_END_POINT_URL+'&client_id='+LINKEDIN_API_KEY+'&scope='+SCOPE+'&state='+EncodingUtil.urlEncode(STATE,'UTF-8')+'&redirect_uri='+EncodingUtil.urlEncode(REDIRECT_URL,'UTF-8');
     PageReference pageRef = new PageReference(x);
     return pageRef; 
   }
}